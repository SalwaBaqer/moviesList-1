import React from "react";
import moviesData from "../../Data/moviesData";
//button
import { DltButtonStyled } from "../../styles";

const DeletButton = ({ movie }) => {
  return (
    <>
      <DltButtonStyled onClick={() => moviesData.deleteMovie(movie.id)}>
        Delet
      </DltButtonStyled>
    </>
  );
};

export default DeletButton;
