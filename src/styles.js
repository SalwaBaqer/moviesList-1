import styled from "styled-components";

export const Wraper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  object-fit: cover;
`;

export const DetailWrapper = styled.div`
  display: block;
  background-color: pink;
  font-family: monospace;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border-bottom-style: ridge;
`;

export const WatchedButtonStyled = styled.button`
  background-color: green;
  padding: 0.75em;
  &:hover {
    color: gray;
    background-color: red;
  }
`;

export const ItemWrapper = styled.div`
  border-style: solid;
  border-left: 10px;
`;

export const DltButtonStyled = styled.button`
  background-color: red;
  padding: 0.75em;
  &:hover {
    color: gray;
    background-color: red;
  }
`;
