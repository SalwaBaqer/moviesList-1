import React from "react";
import { useState } from "react";

//button
import { WatchedButtonStyled } from "../../styles";

const WatchedButton = ({ movie }) => {
  return (
    <>
      <WatchedButtonStyled onClick={() => alert("hhelo")}>
        Watched
      </WatchedButtonStyled>
    </>
  );
};

export default WatchedButton;
