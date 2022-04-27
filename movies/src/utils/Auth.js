function response(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
}

class Auth {
    constructor({ url, headers }) {
        this._url = url
        this._headers = headers
    }
    register(email, password, name) {
        return fetch(`${this._url}/signup`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                password: password,
                email: email,
                name: name,
            })
        })

            .then(response)
    }

    login(email, password) {
        return fetch(`${this._url}/signin`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                password: password,
                email: email,
            })
        })
            .then(response)
    }

    // checkToken(jwt) {
    //     return fetch(`${this._url}/users/me`, {
    //         method: 'GET',
    //         mode: 'cors',
    //         credentials: 'include',
    //         headers: {
    //             ...this._headers,
    //             "authorization": jwt,
    //         }
    //     })
    //     .then(response)
    // }
    checkToken(jwt) {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "authorization": jwt,
            }
        })
        //!!!!!
            .then(response)
    }
}

const auth = new Auth({
    url: 'http://localhost:3000',
})

export default auth