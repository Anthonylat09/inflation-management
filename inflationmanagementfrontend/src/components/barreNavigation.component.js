import '../styles/barreNavigation.component.css';
import { useNavigate } from 'react-router';

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
                <span onClick={handleGoHome}>Inflabudget</span>
            </div>
            <div className="buttons_div">
                <span onClick={handleLoginClick}>Se connecter</span>
                <span onClick={handleSignUpClick}>{"S'inscrire"}</span>
            </div>
        </div>
    );
}
