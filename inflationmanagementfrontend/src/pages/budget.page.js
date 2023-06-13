import PaginationComponent from '../components/pagination.component';
import CarteCategorieComponent from '../components/carteCategorie.component';
import '../styles/budget.page.css';
import PieChartUtils from '../utils/pieChart.utils';
import {useState} from 'react';

export default function BudgetPage() {
    const [isProgrammerButtonActive, activeProgrammerButton] = useState(true);
    return (
        <div>
            <PaginationComponent date={"Juin 2023"}></PaginationComponent>
            <div id="programmer_restant">
                <button className={isProgrammerButtonActive ? 'orange_button' : ''} onClick={() => {
                    activeProgrammerButton(true)
                }}>Programmer
                </button>
                <button className={isProgrammerButtonActive ? '' : 'orange_button'} onClick={()=>{activeProgrammerButton(false)}}>Restant</button>
            </div>
            <section className={isProgrammerButtonActive ? '' : 'hide'}>
                <div id="chart_section">
                    <div id="chart">
                        <PieChartUtils series={[44, 55, 13, 43]}></PieChartUtils>
                    </div>
                    <div id="side_text">
                        <div>Total des dépenses programmées</div>
                        <div>850 €</div>
                        <div>Budget restant: 290€</div>
                    </div>
                </div>
                <div id="categ_section">
                    <div className="square red_circle"></div>
                    <div>Logement</div>
                    <div className="pointille"></div>
                    <div>50€</div>
                    <div className="square green_circle"></div>
                    <div>Binks</div>
                    <div className="pointille"></div>
                    <div>50€</div>
                    <div className="square orange_circle"></div>
                    <div>Hola</div>
                    <div className="pointille"></div>
                    <div>50€</div>
                    <div className="square blue_circle"></div>
                    <div>Nourriture</div>
                    <div className="pointille"></div>
                    <div>50€</div>
                </div>
            </section>
            <div className={"categories"}>
                <CarteCategorieComponent cardTitle={"Nourriture"} isProgrammerButtonActive={isProgrammerButtonActive}></CarteCategorieComponent>
                <CarteCategorieComponent cardTitle={"Test"} isProgrammerButtonActive={isProgrammerButtonActive}></CarteCategorieComponent>
                <CarteCategorieComponent cardTitle={"Hola"} isProgrammerButtonActive={isProgrammerButtonActive}></CarteCategorieComponent>
                <CarteCategorieComponent cardTitle={"Binks"} isProgrammerButtonActive={isProgrammerButtonActive}></CarteCategorieComponent>
                <CarteCategorieComponent cardTitle={"Hola"} isProgrammerButtonActive={isProgrammerButtonActive}></CarteCategorieComponent>
                <CarteCategorieComponent cardTitle={"Binks"} isProgrammerButtonActive={isProgrammerButtonActive}></CarteCategorieComponent>
            </div>

        </div>
    );
}