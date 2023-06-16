import { useState, useEffect, useContext } from "react";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import '../styles/barreTransaction.component.css'
import "../App.css";
import "../styles/accueil.page.css";
import "../styles/transactions.css";
import { getTransactions } from "../services/transaction.service";
import { authContext } from "../utils/authContext.context";
import {useNavigate} from "react-router";


export default function TransactionPage() {
  const navigate = useNavigate();

  const [transactions, setTransactions] = useState([]);
  const {authUser} = useContext(authContext);

  const [currentDate, setCurrentDate] = useState(new Date())
  const [monthYear, setMonthYear] = useState(currentDate.toLocaleString('default', { month: 'long', year: 'numeric' }));

  const [startOfMonth, setStartOfMonth] = useState(new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ))
  const [endOfMonth, setEndOfMonth] = useState(new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ))

  const [depenses, setDepenses] = useState(0)
  const [revenus, setRevenus] = useState(0)
  const [solde, setSolde] = useState(0)

  function handleLeftButtonClick(e) {
    e.preventDefault();
    
    // Create a new Date object based on the current month
    const currentMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    // Subtract one month from the current month
    currentMonthDate.setMonth(currentMonthDate.getMonth() - 1);

    // Update the currentDate state with the new date
    setCurrentDate(currentMonthDate);

    setStartOfMonth(new Date(
      currentMonthDate.getFullYear(),
      currentMonthDate.getMonth(),
      0
    ))

    setEndOfMonth(new Date(
      currentMonthDate.getFullYear(),
      currentMonthDate.getMonth() + 1,
      0
    ))

    // Update the monthYear state with the new month and year
    setMonthYear(currentMonthDate.toLocaleString('default', { month: 'long', year: 'numeric' }));
    
  }

  function handleRightButtonClick(e) {
    e.preventDefault();

    // Create a new Date object based on the current month
    const currentMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    // Subtract one month from the current month
    currentMonthDate.setMonth(currentMonthDate.getMonth() + 1);

    // Update the currentDate state with the new date
    setCurrentDate(currentMonthDate);

    setStartOfMonth(new Date(
      currentMonthDate.getFullYear(),
      currentMonthDate.getMonth(),
      0
    ))

    setEndOfMonth(new Date(
      currentMonthDate.getFullYear(),
      currentMonthDate.getMonth() + 1,
      0
    ))

    // Update the monthYear state with the new month and year
    setMonthYear(currentMonthDate.toLocaleString('default', { month: 'long', year: 'numeric' }));
  }
  useEffect(() => {
    getTransactions(authUser.idUser,startOfMonth, endOfMonth).then((tr) => setTransactions(tr));
  }, [authUser.idUser,startOfMonth, endOfMonth]);

  useEffect(() => {
    let totalRevenus = 0;
    let totalDepenses = 0;
    if (transactions.length === 0){
      setRevenus(0)
      setDepenses(0)
      setSolde(0)
    }
    for (let i = 0; i < transactions.length; i++){
      if(transactions[i].estRevenu) totalRevenus += transactions[i].montantTransaction
      else totalDepenses += transactions[i].montantTransaction
      setRevenus(totalRevenus)
      setDepenses(totalDepenses)
      setSolde(totalRevenus - totalDepenses)
    }
  }, [transactions, monthYear]);

  return (
    <div className="page_accueil">
      <div className="barreTr_div">
        <div className="nombres_div">
          <div className="revenus_div">
            <span>
              Revenus <br />
              {revenus}€
            </span>
          </div>
          <div className="depenses_div">
            <span>
              Dépenses
              <br />
              {depenses}€
            </span>
          </div>
          <div className="solde_div">
            <span>
              Solde
              <br />
              {solde}€
            </span>
          </div>
        </div>
        <div className="mois_div">
          <button id="left_button" onClick={handleLeftButtonClick}>
            <AiOutlineArrowLeft />
          </button>
          <span>
            {monthYear}
            <br />{transactions.length} transactions
          </span>
          <button id="right_button" onClick={handleRightButtonClick}>
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div>
        {transactions.map((transaction) => (
          <div className="transactions_div">
            <div>{transaction.dateTransaction}</div>
            <div className="long_separator"></div>
            <div className="transaction_info">
              <div className="circle blue_circle"></div>
              <div>{transaction.nomTransaction}</div>
              <div className="transaction_amount">{transaction.montantTransaction}€</div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>navigate('/ajoutTransaction')} className='ajout_transaction_button'>Ajouter une transaction</button>
    </div>
  );
}
