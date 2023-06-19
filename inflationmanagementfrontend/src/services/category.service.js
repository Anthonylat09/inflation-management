const url = "http://localhost:8080/categories";

export async function createCategory(category){
    return fetch(`${url}`,{
        method: "POST",
        headers: {Authorization: "Bearer " + localStorage.getItem('TOKEN')},
        body: category
    }).then(response =>
        response.json().then(result => result)
    );
}