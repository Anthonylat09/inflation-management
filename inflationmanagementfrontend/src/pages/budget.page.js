import PaginationComponent from '../components/pagination.component';
import CarteCategorieComponent from '../components/carteCategorie.component';
import '../styles/budget.page.css';

export default function BudgetPage(){
    return(
        <div>
            <PaginationComponent date={"Juin 2023"}></PaginationComponent>
            <section>
                <div id="chart_section">
                    <div id="chart">kjsdfksqd</div>
                    <div id="side_text">
                        <div>Total des dépenses programmées</div>
                        <div>850 €</div>
                        <div>Haha 3 dsqjknvfgnjfqfknsdqfkqzd</div>
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
                <CarteCategorieComponent cardTitle={"Nourriture"}></CarteCategorieComponent>
                <CarteCategorieComponent cardTitle={"Test"}></CarteCategorieComponent>
                <CarteCategorieComponent cardTitle={"Hola"}></CarteCategorieComponent>
                <CarteCategorieComponent cardTitle={"Binks"}></CarteCategorieComponent>
                <CarteCategorieComponent cardTitle={"Hola"}></CarteCategorieComponent>
                <CarteCategorieComponent cardTitle={"Binks"}></CarteCategorieComponent>
            </div>

        </div>
    );
}