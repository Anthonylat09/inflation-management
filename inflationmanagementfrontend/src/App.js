import './App.css';
import AccueilPage from './pages/accueil.page';
import BarreNavigationComponent from './components/barreNavigation.component';

function App() {
    return (
        <div className="App">
            <BarreNavigationComponent/>
            <AccueilPage></AccueilPage>
        </div>
    );
}

export default App;
