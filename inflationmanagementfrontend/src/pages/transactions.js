import BarreNavigationComponent from '../components/barreNavigation.component';
import BarreTransactionComponent from '../components/barreTransaction.component';
import '../styles/accueil.page.css';

export default function TransactionPage(){
    return(
        <div className="page_accueil">
            <BarreNavigationComponent/>
            <BarreTransactionComponent/>
        </div>
    );
}