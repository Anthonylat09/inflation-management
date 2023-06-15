import './App.css';
import AccueilPage from './pages/accueil.page';
import BarreNavigationComponent from './components/barreNavigation.component';
import LoginPage from "./pages/login.page";
import RegisterPage from "./pages/register.page";
import BudgetPage from "./pages/budget.page"
import React from "react";
import {Route, Routes} from "react-router-dom";
import AuthProvider from './utils/authContext.context'
import AuthenticationGuard from './utils/authentication.guard';
import TransactionPage from './pages/transactions';
import AjoutTransactionPage from './pages/ajoutTransactionPage';

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <BarreNavigationComponent />
                <Routes>
                    <Route path="/" element={<AccueilPage />} />
                    <Route path="/connexion" element={<LoginPage />} />
                    <Route path="/inscription" element={<RegisterPage />} />
                    <Route element={<AuthenticationGuard/>}>
                        <Route path="budget" element={<BudgetPage/>}/>
                        <Route path={"transaction"} element={<TransactionPage/>}/>
                        <Route path={"ajoutTransaction"} element={<AjoutTransactionPage/>}/>
                    </Route>
                </Routes>
           </div>
        </AuthProvider>
    );
}

export default App;
