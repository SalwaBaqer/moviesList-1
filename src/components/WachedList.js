import { observer } from "mobx-react";

import { DetailWrapper } from "../styles";

//Components
import MovieItem from "./MovieItem";

//store
import moviesData from "../Data/moviesData";

const WachedList = () => {
  const moviesList = moviesData.movies.filter(
    (_movie) => _movie.watched === false
  );

  const watchedList = moviesList.map((_movie) => (
    <MovieItem movie={_movie} watched={_movie.watched} />
  ));

  return (
    <>
      <h1>Watched List</h1>
      <DetailWrapper>{watchedList}</DetailWrapper>
    </>
  );
};

export default observer(WachedList);
