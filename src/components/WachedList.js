import { observer } from "mobx-react";
import { DetailWrapper } from "../styles";
import { useState } from "react";

//Components
import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";

//store
import moviesData from "../Data/moviesData";

const WachedList = () => {
  const [query, setQuery] = useState("");

  const moviesList = moviesData.movies.filter(
    (_movie) =>
      _movie.watched === false &&
      _movie.title.toLowerCase().includes(query.toLowerCase())
  );

  const watchedList = moviesList.map((_movie) => (
    <MovieItem movie={_movie} watched={_movie.watched} />
  ));

  return (
    <>
      <h1>Watched List</h1>
      <h1>{watchedList.length}</h1>
      <SearchBar setQuery={setQuery} />
      {console.log(query)}
      <DetailWrapper>{watchedList}</DetailWrapper>
    </>
  );
};

export default observer(WachedList);
