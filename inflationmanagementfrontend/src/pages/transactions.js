import BarreNavigationComponent from '../components/barreNavigation.component';
import BarreTransactionComponent from '../components/barreTransaction.component';
import '../App.css';
import '../styles/accueil.page.css';
import '../styles/transactions.css'
export default function TransactionPage(){
    return(
        <div className="page_accueil">
            <BarreNavigationComponent/>
            <BarreTransactionComponent/>
            <div className='transactions_div'>
                <div>07/06/2023</div>
                <div className='separator'></div>
                <div className='circle blue_circle'></div>
            </div>
            <button className='ajout_transaction_button'>Ajouter une transaction</button>
        </div>
        
    );
}