import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.background};
}

.ListName {
    display: flex;
  }
  .NumberOfItems {
    background-color: ${(props) => props.theme.itemBackground};
    border-color: white;
    border-style:solid;
  
    border-width: 0.5px;
    margin-left: 10px;
    height: 40px;
    width: 40px;
    border-radius: 100px;
    text-align:center;
  }

`;

export const Wraper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  object-fit: cover;
  text-decoration-thickness: initial;
`;

export const DetailWrapper = styled.div`
  text-align: center;
  margin-left: 10px;
`;

export const ItemWrapper = styled.div`
  border-style: solid;
  border-width: 3px;
  border-color: white;
  width: 500px;
  background-color: ${(props) => props.theme.itemBackground};
  display: flex;
  .title {
    text-align: center;

    margin-left: 20px;
  }
  div {
    display: flex;
    margin-top: 10px;
    margin-left: auto;
  }
`;

export const WatchedButtonStyled = styled.button`
  background-color: ${(props) => props.theme.watch};
  padding: 0.75em;
  margin: 4px;

  border-radius: 4px;
  &:hover {
    color: white;
    background-color: ${(props) => props.theme.watchHover};
  }
`;

export const DltButtonStyled = styled.button`
  background-color: ${(props) => props.theme.delete};
  padding: 0.75em;
  margin: 4px;
  border-radius: 4px;

  &:hover {
    color: white;
    background-color: ${(props) => props.theme.deleteHover};
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
  margin-left: 10px;
  display: flex;
`;

export const AddButtonStyled = styled.button`
  background-color: ${(props) => props.theme.add};
  width: 50px;
  display: flex;
  margin-left: 3px;
  border-radius: 4px;
  text-align: center;
  padding: 10px;
  &:hover {
    color: white;
    background-color: ${(props) => props.theme.addHover};
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin-right: 680px;
  margin-bottom: 10px;
  border-radius: 4px;
`;
