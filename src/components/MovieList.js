import { observer } from "mobx-react";

import { DetailWrapper } from "../styles";

//Components
import MovieItem from "./MovieItem";

//store
import moviesData from "../Data/moviesData";

const movieList = () => {
  const moviesList = moviesData.movies.map((_movie) => (
    <MovieItem movie={_movie} />
  ));
  return (
    <>
      <DetailWrapper>{moviesList}</DetailWrapper>
      {/* <ListWrapper> </ListWrapper> */}
    </>
  );
};

export default observer(movieList);
