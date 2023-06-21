const apiUrl = "http://localhost:8080/budget/";
export async function getAllSectionsWithCategories(idUser,startDate,endDate){
    const startDateISO = startDate.toISOString().split('T')[0];
    const endDateISO = endDate.toISOString().split('T')[0];
    return fetch(`${apiUrl}sections/${idUser}?startDate=${startDateISO}&endDate=${endDateISO}/`,{
        method: "GET",
        headers: {Authorization: "Bearer " + localStorage.getItem('TOKEN')},
    }).then(response =>
        response.json().then(result => result)
    );
}

export async function getPieChartData(idUser,startDate,endDate){
    const startDateISO = startDate.toISOString().split('T')[0];
    const endDateISO = endDate.toISOString().split('T')[0];
    return fetch(`${apiUrl}pieChartData/${idUser}?startDate=${startDateISO}&endDate=${endDateISO}/`,{
        method: "GET",
        headers: {Authorization: "Bearer " + localStorage.getItem('TOKEN')},
    }).then(response =>
        response.json().then(result => result)
    );
}