import React from "react";

//button
import { WatchedButtonStyled } from "../../styles";
const moveToWatched = () => {
  return <></>;
};

const WatchedButton = ({ movie }) => {
  return (
    <>
      <WatchedButtonStyled onClick={() => (movie.watched = false)}>
        Watched
      </WatchedButtonStyled>
    </>
  );
};

export default WatchedButton;
