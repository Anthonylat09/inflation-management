import '../styles/carteSection.component.css';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {useRef, useState} from 'react';
import {MdGppGood} from 'react-icons/md';
import {createCategory} from '../services/category.service';

export default function CarteSectionComponent(props) {
    const [amount, setAmount] = useState(0.);
    const [catName, setCatName] = useState('');
    const [color, setColor] = useState('');
    const [isAddingCategory, setAddingCategory] = useState(false);
    const colorInputDivRef = useRef(null);
    const handleAmountInput = (event) => {
        setAmount(event.target.value);
    }

    const handleColorInput = (event) => {
        colorInputDivRef.current.style.backgroundColor = event.target.value;
        colorInputDivRef.current.style.borderColor = event.target.value;
        setColor(event.target.value);
    }

    const handleCatNameInput = (event)=>{
        setCatName(event.target.value);
    }

    const handleAjout = ()=>{
        const category = {
            nomCategorie: catName,
            budgetCategorie: amount,
            couleurCategorie: color === '' ? "#000000" : color,
            sectionCategory : props.section
        }
        createCategory(category).then(r=> {
            props.categoryList.push(r);
            setAddingCategory(false)
        });
    }

    return (
        <div id="card">
            <h2>{props.cardTitle}</h2>
            <div className="separator"></div>
            {props.categoryList.map((sous_cat) =>
                <div className="row">
                    <div>
                        <div className={`circle`} style={{
                            backgroundColor: `${sous_cat.couleurCategorie}`,
                            borderColor: `${sous_cat.couleurCategorie}`
                        }}></div>
                        <span>{sous_cat.nomCategorie}</span>
                        <div
                            className={props.isProgrammerButtonActive ? "amount" : "hide"}>{sous_cat.budgetCategorie + ' €'}</div>
                        <div
                            className={props.isProgrammerButtonActive ? "hide" : "remaining_amount"}>{sous_cat.budgetRestant + ' € restant'}</div>
                    </div>
                    <div className="separator gray_separator"></div>
                </div>
            )}
            {isAddingCategory ?
                <div className="row">
                    <div>
                        <div id={"color_input_div"} ref={colorInputDivRef}>
                            <input type="color" id={"color_input"} onChange={handleColorInput} value={"#FF0000"}/>
                        </div>
                        <input type="text" id={"cat_name_input"} placeholder={"Nom de la catégorie"} onChange={handleCatNameInput}/>
                        <input type="text" className={"amount"} placeholder={"0 €"} onChange={handleAmountInput}/>
                    </div>
                    <div className="separator gray_separator"></div>
                </div> :''
            }
            {isAddingCategory ?
                <div className="row sous_cat">
                    <div>
                        <MdGppGood className={"ok"}/>
                        <span className={"ajout"} onClick={handleAjout}>Ajouter</span>
                    </div>
                </div>
                :
                <div className="row sous_cat">
                    <div>
                        <AiOutlinePlusCircle className="icon_plus"/>
                        <span className={"ajout"} onClick={()=>setAddingCategory(true)}>Ajouter une catégorie</span>
                    </div>
                </div>
            }
        </div>
    );
}