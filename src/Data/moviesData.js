import { makeObservable, observable, action } from "mobx";

import movies from "../movies";

class MoviesData {
  movies = movies;

  constructor() {
    makeObservable(this, {
      movies: observable,
      deleteMovie: action,
    });
  }

  deleteMovie = (movietId) => {
    this.movies = this.movies.filter((movie) => movie.id !== movietId);
  };
}
const moviesData = new MoviesData();
export default moviesData;
