import '../styles/ajoutTransaction.page.css'
export default function Page(){
    return(
        <div className="page_transaction">
            <div className="type_transaction_div">
                <button className='type_transaction active'> Dépense</button>
                <button className='type_transaction inactive'> Revenus</button>
            </div>
            <div>
                <div className='infos_transaction'>
                
                </div>
            </div>
        </div>
    );
}