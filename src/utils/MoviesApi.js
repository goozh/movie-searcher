class MoviesApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(this._baseUrl)
      .then(this._checkResponse);
  }
}

export const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');