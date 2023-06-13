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
    }})
}

export function getCurrentUser(token)
{

}
export function isAuthenticated()
{
  return localStorage.getItem('TOKEN') != null
}