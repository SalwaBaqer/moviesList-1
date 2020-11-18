import { observer } from "mobx-react";

// Style
// import { ListWrapper } from "../styles";

//Components
import MovieItem from "./MovieItem";

//store
import moviesData from "../Data/moviesData";

const movieList = () => {
  const moviesList = moviesData.movies.map((_movie) => (
    <h1>
      <MovieItem movie={_movie} />
    </h1>
  ));
  return (
    <>
      <h1>{moviesList}</h1>
      {/* <ListWrapper> </ListWrapper> */}
    </>
  );
};

export default observer(movieList);
