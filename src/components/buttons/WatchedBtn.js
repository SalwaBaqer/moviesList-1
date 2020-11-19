import React from "react";

//button
import { WatchedButtonStyled } from "../../styles";

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
