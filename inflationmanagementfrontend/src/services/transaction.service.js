export async function getTransactions(startDate, endDate) {

    const startDateISO = startDate.toISOString().split('T')[0];
    const endDateISO = endDate.toISOString().split('T')[0];

    const url = `http://localhost:8080/transactions/transactions-between-dates?startDate=${startDateISO}&endDate=${endDateISO}`;

    return fetch(url,{
        method:"GET",
        headers: {Authorization: "Bearer " + localStorage.getItem('TOKEN')},
    }).then(res => res.json())
        .then(result=>result
    )
}