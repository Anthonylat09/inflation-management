import '../styles/barreNavigation.component.css';
import { useNavigate } from 'react-router';
import {useAuth} from '../contexts/authContext.context'

export default function BarreNavigationComponent() {
    const navigate = useNavigate();
    const {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }  = useAuth()


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
                <span onClick={handleLoginClick}>{isLoggedIn?"Se déconnecter":"Se connecter"}</span>
                <span onClick={handleSignUpClick}>{isLoggedIn ? "":"S'inscrire"}</span>
            </div>
        </div>
    );
}
