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
      <div className="ListName">
        <h1>Watched List </h1>
        <h1 className="NumberOfItems">{watchedList.length}</h1>
      </div>
      <DetailWrapper>
        <SearchBar setQuery={setQuery} />
        {watchedList}
      </DetailWrapper>
    </>
  );
};

export default observer(WachedList);
