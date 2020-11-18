import { ItemWrapper } from "../styles";

//buttons
import WatchedButton from "./buttons/WatchedBtn";
import UnWatchedButton from "./buttons/UnwatchedBtn";
const movieItem = ({ movie, watched }) => {
  return (
    <>
      <ItemWrapper>
        {movie.title}

        {watched ? <UnWatchedButton /> : <WatchedButton movie={movie} />}
      </ItemWrapper>
    </>
  );
};

export default movieItem;
