export async function authenticate (email,password) {
    const user = {email,password}


    fetch("http://localhost:8080/authentication/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(user)
    }).then(res => {if(res.status == 403) {
        alert("Authentification échouée")
    }
    else {
        localStorage.setItem('TOKEN',JSON.stringify(res.json()))
        alert(JSON.stringify(res))
    }})
}

export function getCurrentLoggedUser() {
    return fetch("http://localhost:8080/authentication/current-logged-in", {
        method: "GET",
        headers: { Authorization: "Bearer " + localStorage.getItem('TOKEN') },
    }).then(res => res.json());
}

export function isAuthenticated()
{
  return localStorage.getItem('TOKEN') != null
}