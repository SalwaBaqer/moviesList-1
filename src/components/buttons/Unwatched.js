import React from "react";
import { useState } from "react";

//button
import { WatchedButtonStyled } from "../../styles";

const UnWatchedButton = ({ movie }) => {
  return (
    <>
      <WatchedButtonStyled onClick={() => alert("unwatched")}>
        UnWatched
      </WatchedButtonStyled>
    </>
  );
};

export default UnWatchedButton;
