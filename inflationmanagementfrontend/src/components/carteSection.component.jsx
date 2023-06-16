import '../styles/carteSection.component.css';
import {AiOutlinePlusCircle} from 'react-icons/ai';

export default function CarteSectionComponent(props){
    return(
        <div id="card">
            <h2>{props.cardTitle}</h2>
            <div className="separator"></div>
            {props.categoryList.map((sous_cat)=>
                <div className="row">
                    <div>
                        <div className={`circle ${sous_cat.couleurCategorie}_circle` }></div>
                        <span>{sous_cat.nomCategorie}</span>
                        <div className={props.isProgrammerButtonActive ? "amount" : "hide"}>{sous_cat.budgetCategorie + ' €'}</div>
                        <div className={props.isProgrammerButtonActive ? "hide" :"remaining_amount"}>{sous_cat.budgetRestant + ' €'}</div>
                    </div>
                    <div className="separator gray_separator"></div>
                </div>
            )}
            <div className="row sous_cat">
                <div>
                    <AiOutlinePlusCircle className="icon_plus"/>
                    <span className={"ajout"}>Ajouter une catégorie</span>
                </div>
            </div>
        </div>
    );
}