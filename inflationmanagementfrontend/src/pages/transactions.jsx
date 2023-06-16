import BarreTransactionComponent from '../components/barreTransaction.component';
import '../App.css';
import '../styles/accueil.page.css';
import '../styles/transactions.css'
import {useNavigate} from "react-router";

export default function TransactionPage(){
    const navigate = useNavigate();

    return(
        <div className="page_accueil">
            <BarreTransactionComponent/>
            <div className='transactions_div'>
                <div>07/06/2023</div>
                <div className='long_separator'></div>
                <div className='circle blue_circle'></div>
            </div>
            <button onClick={()=>navigate('/ajoutTransaction')} className='ajout_transaction_button'>Ajouter une transaction</button>
        </div>
        
    );
}