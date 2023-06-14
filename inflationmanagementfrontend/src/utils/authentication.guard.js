import {authContext} from './authContext.context';
import {useContext, useEffect, useState} from 'react';
import {Outlet, useNavigate} from 'react-router';
import {getCurrentLoggedUser} from '../services/authentification.service';
import LoaderComponent from '../components/loader.component';

export default function AuthenticationGuard(){
    const {authUser,setAuthUser}=useContext(authContext);
    const [isAllowedToPass, setAllowedToPass] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (authUser && authUser.idUser) {
            setAllowedToPass(true)
        } else getCurrentLoggedUser().then((logged_user) => {
            // console.log('test: '+logged_user);
            //Set the user context
            setAuthUser(logged_user);
            //Set the user locally to know if the request has been successfully done
            setAllowedToPass(true);
        }).catch(() => navigate("/connexion"))
    }, []);
    const tok = localStorage.getItem('TOKEN');
    if (!(tok && isAllowedToPass)) return <LoaderComponent/>;
    return <Outlet/>;
}