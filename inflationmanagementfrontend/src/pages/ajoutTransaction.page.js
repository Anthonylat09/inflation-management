import '../styles/ajoutTransaction.page.css'
import '../App.css'
import React, { useState } from 'react'
export default function AjoutTransactionPage(){

    const [revenueButtonClass, setRevenueButtonClass] = useState('type_transaction inactive');
    const [depenseButtonClass, setDepenseButtonClass] = useState('type_transaction active');

    function handleRevenueClick(e) {
        e.preventDefault();
        setRevenueButtonClass('type_transaction active');
        setDepenseButtonClass('type_transaction inactive')
    }

    function handleDepenseClick(e) {
        e.preventDefault();
        setRevenueButtonClass('type_transaction inactive');
        setDepenseButtonClass('type_transaction active')
    }
    return(
        <div className="page_transaction">
            <div className="type_transaction_div">
                <button id="depense" className={depenseButtonClass} onClick={handleDepenseClick}> Dépense</button>
                <button id="revenus" className={revenueButtonClass} onClick={handleRevenueClick}> Revenus</button>
            </div>
            <div>
                <div className='infos_transaction'>
                <form>
                    <div className="champ_formulaire">
                        <div class='circle blue_circle'></div>
                        <input
                            type="text"
                            placeholder="Catégorie"
                            required
                            style={{ border: '1px solid gray', borderRadius: '10px', padding: '15px', textAlign: 'center', width: '350px', fontSize: '18px' }}
                        />
                    </div>
                    <div className="champ_formulaire">
                        <img src="http://localhost:3000/calendar.svg"/>
                        <input
                            type="text"
                            placeholder="Date"
                            required
                            style={{ border: '1px solid gray', borderRadius: '10px', padding: '15px', textAlign: 'center', width: '350px', fontSize: '18px' }}
                        />
                    </div>
                    <div className="champ_formulaire">
                        <img src="http://localhost:3000/euro.svg"/>
                        <input
                            type="text"
                            placeholder="Somme"
                            required
                            style={{ border: '1px solid gray', borderRadius: '10px', padding: '15px', textAlign: 'center', width: '350px', fontSize: '18px' }}
                        />
                    </div>
                    <button type="submit" style={{ alignSelf: 'center', marginTop: '10px', background: '#ff7300', color: 'white', border: 'none', borderRadius: '15px', padding: '15px', width: '200px', fontSize: '18px' }}>Ajouter</button>
                </form>
                </div>
            </div>
        </div>
    );
}