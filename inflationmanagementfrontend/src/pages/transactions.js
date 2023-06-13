import { useState,useEffect } from 'react';
import BarreNavigationComponent from '../components/barreNavigation.component';
import BarreTransactionComponent from '../components/barreTransaction.component';
import '../App.css';
import '../styles/accueil.page.css';
import '../styles/transactions.css'
export default function TransactionPage(){
    const[transactions,setTransactions]=useState([])
    /*
    useEffect(()=> {
        fetch("http://localhost:8080/forum/transactions",{
            method:"GET"
        }).then(res => res.json())
          .then((result)=>{
            setTransactions(result);
          }
          )
    },[transactions])
    */
    return(
        <div className="page_accueil">
            <BarreTransactionComponent/>
            <div className='transactions_div'>
                <div>07/06/2023</div>
                <div className='long_separator'></div>
                <div className='circle blue_circle'></div>
            </div>
            <button className='ajout_transaction_button'>Ajouter une transaction</button>
        </div>
        
    );
}