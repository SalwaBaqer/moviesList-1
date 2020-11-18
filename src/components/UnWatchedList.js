import { observer } from "mobx-react";

import { DetailWrapper } from "../styles";

//Components
import MovieItem from "./MovieItem";

//store
import moviesData from "../Data/moviesData";

const unWatchedList = () => {
  const moviesList = moviesData.movies.filter(
    (_movie) => _movie.watched === true
  );

  const unWatchedListAfterFliter = moviesList.map((_movie) => (
    <MovieItem movie={_movie} />
  ));

  return (
    <>
      <DetailWrapper>{unWatchedListAfterFliter}</DetailWrapper>
    </>
  );
};

export default observer(unWatchedList);
