import React from "react";
import { useState } from "react";

//button
import { WatchedButtonStyled } from "../../styles";
const moveToWatched = () => {
  return <></>;
};

const WatchedButton = ({ movie }) => {
  return (
    <>
      <WatchedButtonStyled
        onClick={() => {
          alert(`${movie.id}`);
        }}
      >
        Watched
      </WatchedButtonStyled>
    </>
  );
};

export default WatchedButton;
