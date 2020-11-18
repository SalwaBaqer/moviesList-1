import styled from "styled-components";

export const Wraper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  object-fit: cover;
`;

export const DetailWrapper = styled.div`
  font-family: monospace;
  text-align: center;
  margin-left: 10px;
`;

export const ItemWrapper = styled.div`
  border-style: solid;
  border-width: 3px;
  border-color: white;
  width: 700px;
  background-color: #daf5f5;
`;

export const WatchedButtonStyled = styled.button`
  background-color: #3deaea;
  padding: 0.75em;
  margin: 4px;

  border-radius: 4px;
  &:hover {
    color: white;
    background-color: #17bc97;
  }
`;

export const DltButtonStyled = styled.button`
  background-color: #e53f2e;
  padding: 0.75em;
  margin: 4px;
  border-radius: 4px;

  &:hover {
    color: white;
    background-color: #f01f0a;
  }
`;

//Add new movie
export const Addtext = styled.span`
  color: #555;
  display: flex;
  margin-top: 50px;
`;

export const AddBarStyled = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  margin-left: 50px;
  display: flex;
`;

export const AddButtonStyled = styled.button`
  background-color: white;
  width: 50px;
  display: flex;
  margin-left: 3px;
  border-radius: 4px;
  &:hover {
    color: gray;
    background-color: red;
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
