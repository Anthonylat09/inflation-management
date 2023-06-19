import PaginationComponent from '../components/pagination.component';
import CarteSectionComponent from '../components/carteSection.component';
import '../styles/budget.page.css';
import PieChartUtils from '../utils/pieChart.utils';
import {useEffect, useState} from 'react';
import {getAllSectionsWithCategories, getPieChartData} from '../services/budget.service';

export default function BudgetPage() {
    const [isProgrammerButtonActive, activeProgrammerButton] = useState(true);
    const [sections, setSections] = useState([]);
    const [totalBudget, setTotalBudget] = useState(0.);
    const [data, setData] = useState({});
    const [totalRestant, setTotalRestant] = useState(0.);
    useEffect(() => {
        getPieChartData().then(data => setData(data));
        getAllSectionsWithCategories().then(sections => {
            // Set the sections
            setSections(sections);
            //Set totalBudget
            let value = sections.reduce((previousValue, currentValue) => {
                previousValue += currentValue.budgetTotal;
                return previousValue;
            }, 0.);
            setTotalBudget(value);
            //Set totalRestant
            let rest = sections.reduce((acc, current) => {
                let sum = 0.;
                for (const categoryListElement of current.categoryList) {
                    sum += categoryListElement.budgetRestant;
                }
                acc += sum;
                return acc;
            }, 0.)
            setTotalRestant(rest);
        });
    }, [])
    return (
        <div>
            <PaginationComponent date={new Date().toLocaleDateString('fr')}></PaginationComponent>
            <div id="programmer_restant">
                <button className={isProgrammerButtonActive ? 'orange_button' : ''} onClick={() => {
                    activeProgrammerButton(true)
                }}>Programmer
                </button>
                <button className={isProgrammerButtonActive ? '' : 'orange_button'} onClick={() => {
                    activeProgrammerButton(false)
                }}>Restant
                </button>
            </div>
            <section className={isProgrammerButtonActive ? 'budgetSection' : 'hide'}>
                <div id="chart_section">
                    <div id="chart">
                        {data.series ? <PieChartUtils data={data}></PieChartUtils> : ''}
                    </div>
                    <div id="side_text">
                        <div>Total des dépenses programmées</div>
                        <div>{totalBudget + ' €'}</div>
                        <div>Budget restant: {totalRestant} €</div>
                    </div>
                </div>
                <div id="categ_section">
                    {
                        sections.map(section => {
                            return (
                                <>
                                    <div className={`square`} style={{
                                        backgroundColor: `${section.couleurSection}`,
                                        borderColor: `${section.couleurSection}`
                                    }}></div>
                                    <div>{section.nomSection}</div>
                                    <div className="pointille"></div>
                                    <div>{section.budgetTotal}</div>
                                </>
                            );
                        })
                    }
                </div>
            </section>
            <div className={"categories"}>
                {sections.map(section =>
                    <CarteSectionComponent cardTitle={section.nomSection} categoryList={section.categoryList} section={section}
                                           isProgrammerButtonActive={isProgrammerButtonActive}></CarteSectionComponent>)
                }
            </div>

        </div>
    );
}