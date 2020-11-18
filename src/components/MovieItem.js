import { ItemWrapper } from "../styles";

//buttons
import WatchedButton from "./buttons/Watched";
import Unwatched from "./buttons/Unwatched";
const movieItem = ({ movie, watched }) => {
  return (
    <>
      <ItemWrapper>
        {movie.title}

        {watched ? <Unwatched /> : <WatchedButton />}
      </ItemWrapper>
    </>
  );
};

export default movieItem;
