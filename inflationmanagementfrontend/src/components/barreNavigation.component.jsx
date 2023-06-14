import '../styles/barreNavigation.component.css';
import {useNavigate} from 'react-router';
import {isAuthenticated} from "../services/authentification.service";

export default function BarreNavigationComponent() {
    const navigate = useNavigate();


    const handleLoginClick = () => {
        navigate('/connexion');
    };
    const handleSignUpClick = () =>
{
     navigate('/inscription');
};
 const handleGoHome = () =>
 {
 navigate('/');
 }
    return (
        <div className="barre_div">
            <div className="logo_div">
                <spa onClick={handleGoHome}>Inflabudget</spa>
            </div>
            <div className="buttons_div">
                <span onClick={handleLoginClick}>{isAuthenticated()?"Se déconnecter":"Se connecter"}</span>
                <span onClick={handleSignUpClick}>{isAuthenticated() ? "":"S'inscrire"}</span>
            </div>
        </div>
    );
}
