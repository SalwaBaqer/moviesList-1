import { makeObservable, observable, action } from "mobx";

import movies from "../movies";

class MoviesData {
  movies = movies;

  constructor() {
    makeObservable(this, {
      movies: observable,
      deleteMovie: action,
      addMovie: action,
    });
  }
  addMovie = (movie) => {
    movie.id = movies[movies.length - 1].id + 1;
    console.log(`${movie.id} id`);
    console.log(`${movies[movies.length - 1].id} idlength`);

    this.movies.push(movie);
  };

  deleteMovie = (movietId) => {
    this.movies = this.movies.filter((movie) => movie.id !== movietId);
  };
}
const moviesData = new MoviesData();
export default moviesData;
