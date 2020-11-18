import { ItemWrapper } from "../styles";

const movieItem = ({ movie }) => {
  return (
    <>
      {/* <ProductWrapper> */}

      <ItemWrapper>{movie.title}</ItemWrapper>

      {/* </ProductWrapper> */}
    </>
  );
};

export default movieItem;
