import '../styles/carteSection.component.css';
import {AiOutlinePlusCircle} from 'react-icons/ai';

export default function CarteSectionComponent(props){
    return(
        <div id="card">
            <h2>{props.cardTitle}</h2>
            <div className="separator"></div>
            {/*{props.categoriesListe.map((sous_cat)=>*/}
            {/*    <div className="row">*/}
            {/*        <div>*/}
            {/*            <div className={`circle ${sous_cat.couleur}_circle` }></div>*/}
            {/*            <span>{sous_cat.nom}</span>*/}
            {/*            <div className="amount">{sous_cat.budget + ' €'}</div>*/}
            {/*            <div className={props.isProgrammerButtonActive ? "amount" : "hide"}>{sous_cat.budget + ' €'}</div>*/}
            {/*            <div className={props.isProgrammerButtonActive ? "hide" :"remaining_amount"}>{sous_cat.budget_restant + ' €'}</div>*/}
            {/*        </div>*/}
            {/*        <div className="separator gray_separator"></div>*/}
            {/*    </div>*/}
            {/*)}*/}
            <div className="row">
                <div>
                    <div className="circle red_circle"></div>
                    <span>Epicerie</span>
                    <div className={props.isProgrammerButtonActive ? "amount" : "hide"}>50€</div>
                    <div className={props.isProgrammerButtonActive ? "hide" :"remaining_amount"}>0€ restant</div>
                </div>
                <div className="separator gray_separator"></div>
            </div>
            <div className="row">
                <div>
                    <div className="circle green_circle"></div>
                    <span>Restauration</span>
                    <div className={props.isProgrammerButtonActive ? "amount" : "hide"}>50€</div>
                    <div className={props.isProgrammerButtonActive ? "hide" :"remaining_amount"}>0€ restant</div>
                </div>
                <div className="separator gray_separator"></div>
            </div>
            <div className="row">
                <div>
                    <div className="circle orange_circle"></div>
                    <span>Loyer</span>
                    <div className={props.isProgrammerButtonActive ? "amount" : "hide"}>50€</div>
                    <div className={props.isProgrammerButtonActive ? "hide" :"remaining_amount"}>0€ restant</div>
                </div>
                <div className="separator gray_separator"></div>
            </div>
            <div className="row sous_cat">
                <div>
                    <AiOutlinePlusCircle className="icon_plus"/>
                    <span className={"ajout"}>Ajouter une sous-catégorie</span>
                </div>
            </div>
        </div>
    );
}