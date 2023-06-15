import { useState, useEffect } from "react";
import BarreTransactionComponent from "../components/barreTransaction.component";
import "../App.css";
import "../styles/accueil.page.css";
import "../styles/transactions.css";
import { getTransactions } from "../services/transaction.service";
export default function TransactionPage() {
  const [transactions, setTransactions] = useState([]);

  const currentDate = new Date();
  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  useEffect(() => {
    getTransactions(startOfMonth, endOfMonth).then((tr) => setTransactions(tr));
  }, []);

  return (
    <div className="page_accueil">
      <BarreTransactionComponent />
      <div>
        {transactions.map((transaction) => (
          <div className="transactions_div">
            <div>{transaction.dateTransaction}</div>
            <div className="long_separator"></div>
            <div style={{ display: "flex" }}>
              <div className="circle blue_circle"></div>
              <div>{transaction.nomTransaction}</div>
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
