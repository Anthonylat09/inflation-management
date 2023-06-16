const apiUrl = "http://localhost:8080/budget/";
export async function getAllSectionsWithCategories(){
    return fetch(`${apiUrl}sections/all`,{
        method: "GET",
        headers: {Authorization: "Bearer " + localStorage.getItem('TOKEN')},
    }).then(response =>
        response.json().then(result => result)
    );
}

export async function getPieChartData(){
    return fetch(`${apiUrl}pieChartData`,{
        method: "GET",
        headers: {Authorization: "Bearer " + localStorage.getItem('TOKEN')},
    }).then(response =>
        response.json().then(result => result)
    );
}