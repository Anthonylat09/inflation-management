import PaginationComponent from '../components/pagination.component';
import CarteSectionComponent from '../components/carteSection.component';
import '../styles/budget.page.css';
import '../styles/pagination.component.css';
import PieChartUtils from '../utils/pieChart.utils';
import {useContext, useEffect, useState} from 'react';
import {getAllSectionsWithCategories, getPieChartData} from '../services/budget.service';
import {authContext} from '../utils/authContext.context';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';

export default function BudgetPage() {
    const {authUser} = useContext(authContext);
    const [isProgrammerButtonActive, activeProgrammerButton] = useState(true);
    const [sections, setSections] = useState([]);
    const [totalBudget, setTotalBudget] = useState(0.);
    const [data, setData] = useState({});
    const [totalRestant, setTotalRestant] = useState(0.);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [monthYear, setMonthYear] = useState(currentDate.toLocaleString('default', { month: 'long', year: 'numeric' }));
    const [startOfMonth, setStartOfMonth] = useState(new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    ));
    const [endOfMonth, setEndOfMonth] = useState(new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ));

    const handlePaginationButtonClick = (side)=>{

        // Create a new Date object based on the current month
        const currentMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

        switch (side){
            case 'left':
                // Subtract one month from the current month
                currentMonthDate.setMonth(currentMonthDate.getMonth() - 1);
                break;
            case 'right':
                // Subtract one month from the current month
                currentMonthDate.setMonth(currentMonthDate.getMonth() + 1);
                break;
            default:
                break;
        }

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
        getPieChartData(authUser.idUser, startOfMonth, endOfMonth).then(data => setData(data));
        getAllSectionsWithCategories(authUser.idUser, startOfMonth, endOfMonth).then(sections => {
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
    }, [startOfMonth,endOfMonth])
    return (
        <div>
            <div id="pagination">
                <button id="left_button" onClick={()=>handlePaginationButtonClick('left')}>
                    <AiOutlineArrowLeft/>
                </button>
                <span>{monthYear}</span>
                <button id="right_button" onClick={()=>handlePaginationButtonClick('right')}>
                    <AiOutlineArrowRight/>
                </button>
            </div>
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
                    <CarteSectionComponent cardTitle={section.nomSection} categoryList={section.categoryList}
                                           section={section}
                                           isProgrammerButtonActive={isProgrammerButtonActive}></CarteSectionComponent>)
                }
            </div>

        </div>
    );
}