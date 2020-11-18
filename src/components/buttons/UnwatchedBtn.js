import React from "react";

//button
import { WatchedButtonStyled } from "../../styles";

const UnWatchedButton = ({ movie }) => {
  return (
    <>
      <WatchedButtonStyled onClick={() => (movie.watched = true)}>
        UnWatched
      </WatchedButtonStyled>
    </>
  );
};

export default UnWatchedButton;
