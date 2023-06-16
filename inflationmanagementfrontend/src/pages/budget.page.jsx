import PaginationComponent from '../components/pagination.component';
import CarteSectionComponent from '../components/carteSection.component';
import '../styles/budget.page.css';
import PieChartUtils from '../utils/pieChart.utils';
import {useState} from 'react';

export default function BudgetPage() {
    const [isProgrammerButtonActive, activeProgrammerButton] = useState(true);
    const [sections, setSections] = useState([])
    return (
        <div>
            <PaginationComponent></PaginationComponent>
            <div id="programmer_restant">
                <button className={isProgrammerButtonActive ? 'orange_button' : ''} onClick={() => {
                    activeProgrammerButton(true)
                }}>Programmer
                </button>
                <button className={isProgrammerButtonActive ? '' : 'orange_button'} onClick={()=>{activeProgrammerButton(false)}}>Restant</button>
            </div>
            <section className={isProgrammerButtonActive ? 'budgetSection' : 'hide'}>
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
                {sections.map(section =>
                    <CarteSectionComponent cardTitle={section.nomSection} categoryList={section.categoryList}
                                           isProgrammerButtonActive={isProgrammerButtonActive}></CarteSectionComponent>)
                }
            </div>

        </div>
    );
}