import '../styles/barreNavigation.component.css';
import {useNavigate} from 'react-router';
import {isAuthenticated, signOut} from "../services/authentification.service";

export default function BarreNavigationComponent() {
    const navigate = useNavigate();


    const handleLoginClick = () => {
        navigate('/connexion');
    };
    const handleSignUpClick = () => {
        navigate('/inscription');
    };
    const goHome = () => {
        navigate('/');
    }
    return (
        <div className="barre_div">
            <div className="logo_div">
                <span onClick={goHome}>Inflabudget</span>
            </div>
            {isAuthenticated()?
                <div id="main_buttons">
                    <span onClick={()=>navigate('transaction')}>Transactions</span>
                    <span onClick={()=>navigate('budget')}>Budget</span>
                </div>: ''
            }
            <div className="buttons_div">
                {isAuthenticated() ?
                    <span onClick={()=> {
                        signOut(); goHome();
                    }}>Se déconnecter</span> :
                    <div>
                        <span onClick={handleLoginClick}>Se connecter</span>
                        <span onClick={handleSignUpClick}>S'inscrire</span>
                    </div>
                    }

            </div>
        </div>
    );
}
