import '../styles/barreTransaction.component.css'

export default function BarreTransactionComponent() {
    return (
        <div className="barreTr_div">
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
    );
}