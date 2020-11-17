import movies from "../movies";
import { makeObservable, observable, action } from "mobx";
class MoviesData {
  movies = movies;

  constructor() {
    makeObservable(this, {
      movies: observable,
      //   creatProduct: action,
      //   deleteProduct: action,
    });
  }

  //   creatProduct = (newProduct) => this.products.push(newProduct);

  //   deleteProduct = (productId) => {
  //     this.products = this.products.filter((product) => product.id !== productId);
  //   };
}
const moviesData = new MoviesData();
export default moviesData;
