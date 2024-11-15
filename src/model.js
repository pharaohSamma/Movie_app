class Model {
  static instance;

  movieList = [];
  genreList = [];

  constructor() {
    if (Model.instance) {
      return Model.instance;
    }
    Model.instance = this;
  }

  getMovieList() {
    return this.movieList;
  }

  setMovieList() {
    return this.movieList;
  }

  getGenreList() {
    return this.genreList;
  }

  setGenreList() {
    return this.genreList;
  }
}

export { Model };
