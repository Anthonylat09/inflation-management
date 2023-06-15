import { useState, useEffect } from "react";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import '../styles/barreTransaction.component.css'
import "../App.css";
import "../styles/accueil.page.css";
import "../styles/transactions.css";
import { getTransactions } from "../services/transaction.service";
export default function TransactionPage() {
  const [transactions, setTransactions] = useState([]);

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
    getTransactions(startOfMonth, endOfMonth).then((tr) => setTransactions(tr));
  }, [startOfMonth, endOfMonth]);

  return (
    <div className="page_accueil">
      <div className="barreTr_div">
        <div className="nombres_div">
          <div className="revenus_div">
            <span>
              Revenus <br />
              {}
            </span>
          </div>
          <div className="depenses_div">
            <span>
              Dépenses
              <br />
              {}
            </span>
          </div>
          <div className="solde_div">
            <span>
              Solde
              <br />
              {}
            </span>
          </div>
        </div>
        <div className="mois_div">
          <button id="left_button" onClick={handleLeftButtonClick}>
            <AiOutlineArrowLeft />
          </button>
          <span>
            {monthYear}
            <br />{transactions.length} transacions
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
      <button className="ajout_transaction_button">
        Ajouter une transaction
      </button>
    </div>
  );
}
