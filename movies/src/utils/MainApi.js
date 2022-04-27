function response(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
}
class MainApi {
  constructor({ url, headers }) {
    this._url = url
    this._headers = headers
  }

  getSaveMovies() {
    return fetch(`${this._url}/movies`, {
      headers: {
        ...this._headers,
      credentials: 'include',
      authorization: localStorage.getItem("jwt"),}
    })
      .then(response)
  }

  saveMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: {
        ...this._headers,
        credentials: 'include',
        authorization: localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        country: movie.country || "Нет данных",
        director: movie.director || "Нет данных",
        duration: movie.duration || 0,
        year: movie.year || "Нет данных",
        description: movie.description || " ",
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink || " ",
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url }`,
        movieId:  movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
    })
      .then(response)
  }

  deleteSaveMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        authorization: localStorage.getItem("jwt"),
      }
    })
    .then(response)
  }

  getUser() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        ...this._headers,
        authorization: `${localStorage.getItem("jwt")}`,
      }
    })
    .then(response)
  }

  updateUser(name, email) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        ...this._headers,
        authorization: localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then(response)
  }


}
const mainApi = new MainApi({
  url: 'http://localhost:3000',
  headers: {
      "Content-Type": "application/json"
  }
})

export default mainApi