import { ItemWrapper } from "../styles";

//buttons
import WatchedButton from "./buttons/WatchedBtn";
import UnWatchedButton from "./buttons/UnwatchedBtn";
import DeletButton from "./buttons/DeletBtn";
const movieItem = ({ movie }) => {
  return (
    <>
      <ItemWrapper>
        {movie.title}

        {movie.watched ? (
          <WatchedButton movie={movie} />
        ) : (
          <UnWatchedButton movie={movie} />
        )}
        <DeletButton movie={movie} />
      </ItemWrapper>
    </>
  );
};

export default movieItem;
