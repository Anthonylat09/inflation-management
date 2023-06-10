import '../styles/barreTransaction.component.css'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';

export default function BarreTransactionComponent() {
    return (
        <div className="barreTr_div">
            <div className='nombres_div'>
                <div className="revenus_div">
                    <span>Revenus <br/>
                    100 €
                    </span>
                </div>
                <div className="depenses_div">
                    <span>Dépenses<br/>
                    50 €
                    </span>
                </div>
                <div className="solde_div">
                    <span>Solde<br/>
                    50 €
                    </span>
                </div>
            </div>
            <div className="mois_div">  
                <button id="left_button">
                    <AiOutlineArrowLeft/>
                </button>
                <span>Juin 2023<br/>
                5 transactions
                </span>
                <button id="right_button">
                    <AiOutlineArrowRight/>
                </button>
            </div>
        </div>
    );
}