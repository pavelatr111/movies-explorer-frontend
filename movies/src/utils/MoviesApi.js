function response(res){
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
}
 
class MoviesApi {
    constructor({url, headers}) {
        this._url = url
        this._headers = headers
    }

    getMovies() {
        return fetch(this._url, {
            headers: this._headers,
        })
        .then(response)
    }

}



const moviesApi = new MoviesApi ({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        "Content-Type": "application/json"
    }
  })
  
  export default moviesApi