export async function authenticate(email, password) {
    const user = { email, password };

    try {
        const response = await fetch("http://localhost:8080/authentication/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });

        if (response.status === 403) {
            throw new Error("Authentification échouée");
        }

        const result = await response.json();
        localStorage.setItem("TOKEN", result.authResponse);
    } catch (error) {
        throw new Error(error.message);
    }
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