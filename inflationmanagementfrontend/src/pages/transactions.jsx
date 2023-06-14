import { useState,useEffect } from 'react';
import BarreTransactionComponent from '../components/barreTransaction.component';
import '../App.css';
import '../styles/accueil.page.css';
import '../styles/transactions.css'
export default function TransactionPage(){
    const[transactions,setTransactions]=useState([])
    
    useEffect(()=> {
        const currentDate = new Date();
        const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

        const startDateISO = startOfMonth.toISOString().split('T')[0];
        const endDateISO = endOfMonth.toISOString().split('T')[0];

        const url = `http://localhost:8080/forum/transactions-between-dates?startDate=${startDateISO}&endDate=${endDateISO}`;

        fetch(url,{
            method:"GET"
        }).then(res => res.json())
          .then((result)=>{
            setTransactions(result);
          }
          )
    },[transactions])
    
    return(
        <div className="page_accueil">
            <BarreTransactionComponent/>
            <div>
            {transactions.map(transaction=>(
                
                <div className='transactions_div'>
                    <div>{transaction.dateTransaction}</div>
                    <div className='long_separator'></div>
                    <div className='circle blue_circle'></div>
                    {transaction.nomTransaction}
                </div>
            ))}
            </div>
            <button className='ajout_transaction_button'>Ajouter une transaction</button>
        </div>
        
    );
}