import '../styles/carteCategorie.component.css';
import {AiOutlinePlusCircle} from 'react-icons/ai';

export default function CarteCategorieComponent(props){
    return(
        <div id="card">
            <h2>{props.cardTitle}</h2>
            <div className="separator"></div>
            {/*{props.sousCategoriesListe.map((sous_cat)=>*/}
            {/*    <div className="row">*/}
            {/*        <div>*/}
            {/*            <div className={`circle ${sous_cat.couleur}_circle` }></div>*/}
            {/*            <span>{sous_cat.nom}</span>*/}
            {/*        </div>*/}
            {/*        <div className="separator gray_separator"></div>*/}
            {/*    </div>*/}
            {/*)}*/}
            <div className="row">
                <div>
                    <div className="circle red_circle"></div>
                    <span>Epicerie</span>
                </div>
                <div className="separator gray_separator"></div>
            </div>
            <div className="row">
                <div>
                    <div className="circle green_circle"></div>
                    <span>Restauration</span>
                </div>
                <div className="separator gray_separator"></div>
            </div>
            <div className="row">
                <div>
                    <div className="circle orange_circle"></div>
                    <span>Loyer</span>
                </div>
                <div className="separator gray_separator"></div>
            </div>
            <div className="row">
                <div>
                    <AiOutlinePlusCircle className="icon_plus"/>
                    <span className={"ajout"}>Ajouter une sous-catégorie</span>
                </div>
            </div>
        </div>
    );
}