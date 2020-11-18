import { makeObservable, observable, action } from "mobx";

import movies from "../movies";

class MoviesData {
  movies = movies;

  constructor() {
    makeObservable(this, {
      movies: observable,
    });
  }
}
const moviesData = new MoviesData();
export default moviesData;
