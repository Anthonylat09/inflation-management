export async function authenticate(email, password) {
    const user = {email, password}

    fetch("http://localhost:8080/authentication/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    }).then(response => {
        if (response.status === 403) {
            alert("Authentification échouée")
        } else {
            response.json().then((result) => {
                localStorage.setItem('TOKEN',result.authResponse);
            });
        }
    })
}


export async function getCurrentLoggedUser() {
    return fetch("http://localhost:8080/authentication/current-logged-in", {
        method: "GET",
        headers: {Authorization: "Bearer " + localStorage.getItem('TOKEN')},
    }).then(response =>
        response.json().then(result => result)
    );
}

export function isAuthenticated() {
    return localStorage.getItem('TOKEN') != null
}

export function signOut() {
    localStorage.clear();
}