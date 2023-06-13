export async function authenticate (email,password) {
    const user = {email,password}


    fetch("http://localhost:3000/authentification/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(user)
    }).then(res => {if(res.status == 403) {
        alert("Authentification échouée")
    }
    else {
        localStorage.setItem('TOKEN',res)
    }})
}

export function getCurrentUser()
{
    
}
export function isAuthenticated()
{
  return localStorage.getItem('TOKEN') != null
}