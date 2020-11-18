import React from "react";

import { useState } from "react";

//from styles
import { AddBarStyled, Addtext, AddButtonStyled } from "../styles";

import moviesData from "../Data/moviesData";

const AddMovie = () => {
  const [movie, setMovie] = useState({
    title: "",
    watched: true,
  });
  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Addtext>
        <AddBarStyled
          placeholder="Add new movie"
          value={movie.title}
          type="text"
          name="title"
          onChange={handleChange}
        />

        <AddButtonStyled onClick={() => moviesData.addMovie(movie)}>
          Add
        </AddButtonStyled>
      </Addtext>
    </>
  );
};
export default AddMovie;
