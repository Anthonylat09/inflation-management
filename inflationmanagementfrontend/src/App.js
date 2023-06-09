import './App.css';
import AccueilPage from './pages/accueil.page';
import BarreNavigationComponent from './components/barreNavigation.component';
import LoginPage from "./pages/login.page";
import RegisterPage from "./pages/register.page";
import BudgetPage from "./pages/budget.page"
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
                <BarreNavigationComponent />
                <Routes>
                    <Route path="/" element={<AccueilPage />} />
                    <Route path="/connexion" element={<LoginPage />} />
                    <Route path="/inscription" element={<RegisterPage />} />
                    <Route path="/budget" element={<BudgetPage/>}></Route>
                </Routes>
        </div>
    );
}

export default App;
