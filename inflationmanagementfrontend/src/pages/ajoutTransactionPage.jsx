import '../styles/ajoutTransaction.page.css';
import '../App.css';
import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {authContext} from '../utils/authContext.context';

export default function AjoutTransactionPage() {
    const {authUser} = useContext(authContext);
    const [transaction, setTransaction] = useState({
        nomTransaction: '',
        categorieTransaction: '', // Utiliser l'ID de la catégorie au lieu du nom
        dateTransaction: '',
        montantTransaction: '',
        estRevenu: '',
        userTransaction: '',
    });
    const [categories, setCategories] = useState([]); // État pour stocker les catégories
    const [errors, setErrors] = useState({}); // État pour stocker les erreurs de validation
    const [revenueButtonClass, setRevenueButtonClass] = useState('type_transaction inactive');
    const [depenseButtonClass, setDepenseButtonClass] = useState('type_transaction active');
    const [isRevenu, setisRevenu] = useState(0);
    const navigate = useNavigate();

    // Charger les catégories depuis le backend lors du montage du composant
    useEffect(() => {
        fetch('http://localhost:8080/categories/all', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('TOKEN'),
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch categories ' + response.status);
                }
            })
            .then((data) => {
                setCategories(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);





    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTransaction((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    function handleRevenueClick(e) {
        e.preventDefault();
        setRevenueButtonClass('type_transaction active');
        setDepenseButtonClass('type_transaction inactive');
        setisRevenu(1);
    }

    function handleDepenseClick(e) {
        e.preventDefault();
        setRevenueButtonClass('type_transaction inactive');
        setDepenseButtonClass('type_transaction active');
        setisRevenu(0);
    }

    // Fonction pour afficher les options de catégorie
    const renderCategoryOptions = () => {
        return categories.map((category) => (
            <option key={category.id} value={category.id}>
                {category.nomCategorie}
            </option>
        ));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Effectuer la vérification des champs
        const validationErrors = {};
        if (transaction.nomTransaction.trim() === '') {
            validationErrors.nomTransaction = 'Le champ Nom est obligatoire';
        }
        if (transaction.categorieTransaction.trim() === '') {
            validationErrors.categorieTransaction = 'Le champ Catégorie est obligatoire';
        }
        if (transaction.dateTransaction.trim() === '') {
            validationErrors.dateTransaction = 'Le champ Date est obligatoire';
        }
        if (transaction.montantTransaction.trim() === '') {
            validationErrors.montantTransaction = 'Le champ Somme est obligatoire';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const selectedCategoryId = parseInt(transaction.categorieTransaction); // Convertir l'ID de la catégorie en nombre entier

        const requestBody = {
            nomTransaction: transaction.nomTransaction,
            categorieTransaction: selectedCategoryId,
            dateTransaction: transaction.dateTransaction,
            montantTransaction: transaction.montantTransaction,
            estRevenu: isRevenu,
            userTransaction: authUser.idUser,
        };

        fetch('http://localhost:8080/transactions', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('TOKEN'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to create transaction ' + response.status);
                }
            })
            .then((data) => {
                // Gérer la réponse du serveur après la création de la transaction
                console.log(data);
                navigate('/transaction')
            })
            .catch((error) => {
                // Gérer les erreurs lors de la création de la transaction
                console.error(error);
            });
    };


    return (
        <div className="page_transaction">
            <div className="type_transaction_div">
                <button id="depense" className={depenseButtonClass} onClick={handleDepenseClick}>
                    Dépense
                </button>
                <button id="revenus" className={revenueButtonClass} onClick={handleRevenueClick}>
                    Revenus
                </button>
            </div>
            <div>
                <div className="infos_transaction">
                    <form onSubmit={handleSubmit}>
                        <div className="champ_formulaire">
                            <img src="http://localhost:3000/name-list.png" />
                            <input
                                type="text"
                                name="nomTransaction"
                                value={transaction.nomTransaction || ''}
                                onChange={handleInputChange}
                                placeholder="Nom"
                                required
                                style={{
                                    border: '1px solid gray',
                                    borderRadius: '10px',
                                    padding: '15px',
                                    textAlign: 'center',
                                    width: '350px',
                                    fontSize: '18px',
                                }}
                            />
                            {errors.nomTransaction && <div className="error">{errors.nomTransaction}</div>}{' '}
                            {/* Afficher l'erreur de validation */}
                        </div>
                        <div className="champ_formulaire">
                            <div className="circle blue_circle"></div>
                            <select
                                name="categorieTransaction"
                                value={transaction.categorieTransaction}
                                onChange={handleInputChange}
                                required
                                style={{
                                    border: '1px solid gray',
                                    borderRadius: '10px',
                                    padding: '15px',
                                    textAlign: 'center',
                                    width: '350px',
                                    fontSize: '18px',
                                }}
                            >
                                <option value="">Sélectionner une catégorie</option>
                                {renderCategoryOptions()}
                            </select>
                            {errors.categorieTransaction && <div className="error">{errors.categorieTransaction}</div>}{' '}
                            {/* Afficher l'erreur de validation */}
                        </div>
                        <div className="champ_formulaire">
                            <img src="http://localhost:3000/calendar.svg" />
                            <input
                                type="text"
                                name="dateTransaction"
                                value={transaction.dateTransaction || ''}
                                onChange={handleInputChange}
                                placeholder="Date"
                                required
                                style={{
                                    border: '1px solid gray',
                                    borderRadius: '10px',
                                    padding: '15px',
                                    textAlign: 'center',
                                    width: '350px',
                                    fontSize: '18px',
                                }}
                            />
                            {errors.dateTransaction && <div className="error">{errors.dateTransaction}</div>}{' '}
                            {/* Afficher l'erreur de validation */}
                        </div>
                        <div className="champ_formulaire">
                            <img src="http://localhost:3000/euro.svg" />
                            <input
                                type="text"
                                name="montantTransaction"
                                value={transaction.montantTransaction || ''}
                                onChange={handleInputChange}
                                placeholder="Somme"
                                required
                                style={{
                                    border: '1px solid gray',
                                    borderRadius: '10px',
                                    padding: '15px',
                                    textAlign: 'center',
                                    width: '350px',
                                    fontSize: '18px',
                                }}
                            />
                            {errors.montantTransaction && <div className="error">{errors.montantTransaction}</div>}{' '}
                            {/* Afficher l'erreur de validation */}
                        </div>
                        <button
                            type="submit"
                            style={{
                                alignSelf: 'center',
                                marginTop: '10px',
                                background: '#ff7300',
                                color: 'white',
                                border: 'none',
                                borderRadius: '15px',
                                padding: '15px',
                                width: '200px',
                                fontSize: '18px',
                            }}
                        >
                            Ajouter
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
