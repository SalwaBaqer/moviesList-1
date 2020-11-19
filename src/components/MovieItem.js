import { ItemWrapper } from "../styles";

//buttons
import WatchedButton from "./buttons/WatchedBtn";
import UnWatchedButton from "./buttons/UnwatchedBtn";
import DeletButton from "./buttons/DeletBtn";
const movieItem = ({ movie }) => {
  return (
    <>
      <ItemWrapper>
        <h3 className="title">{movie.title}</h3>
        <div>
          {movie.watched ? (
            <WatchedButton movie={movie} />
          ) : (
            <UnWatchedButton movie={movie} />
          )}
          <DeletButton movie={movie} />
        </div>
      </ItemWrapper>
    </>
  );
};

export default movieItem;
