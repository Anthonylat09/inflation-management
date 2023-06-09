import '../styles/accueil.page.css';

export default function AccueilPage(){
    return(
        <div className="page_accueil">
            <img src="http://localhost:3000/logo.svg" id="logo"/>
            <div>
                <div className="blobs_div">
                    <img src="http://localhost:3000/undraw_personal_finance_re_ie6k.svg"/>
                    <img src="http://localhost:3000/blob.svg" className="blobs"/>
                </div>
                <div className="side_text">
                    <h2>Gérez vos finances personnelles de manière efficace</h2>
                    <p>Suivez vos revenus, gérez vos dépenses. Planifiez votre avenir financier en toute simplicité.
                    Faites face aux défis de l'inflation en prenant des décisions éclairées pour optimiser votre budget.</p>
                </div>
            </div>
            <section>
                <div className="side_text">
                    <h2>Découvrez les statistiques essentielles</h2>
                    <p>Notre application vous fournit une analyse détaillée de vos dépenses , vous permettant ainsi de visualiser
                    clairement où va votre argent. Prenez des décisions financières éclairées et optimisez votre répartition budgétaire en toute confiance.</p>
                </div>
                <div className="blobs_div">
                    <img src="http://localhost:3000/undraw_pie_graph_re_fvol.svg"/>
                    <img src="http://localhost:3000/blob_1.svg" className="blobs"/>
                </div>
            </section>
        </div>
    );
}