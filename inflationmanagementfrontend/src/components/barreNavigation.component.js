import '../styles/barreNavigation.component.css'

export default function BarreNavigationComponent() {
    return (
        <div className="barre_div">
            <div className="logo_div">
                <span>Inflabudget</span>
            </div>
            <div className="buttons_div">
                <span>Se connecter</span>
                <span>S'inscrire</span>
            </div>
        </div>
    );
}