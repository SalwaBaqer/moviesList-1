//components
import UnWatchedList from "./components/UnWatchedList";
import WachedList from "./components/WachedList";
import AddMovie from "./components/AddMovie";

//style
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    mainColor: "black",
    backgroundColor: "#F3FBFF",
    itemBackground: "#E1F5F6",
    pink: "#101314",
    border: "#EBF1F4",
    delete: "#EC9C82",
    deleteHover: "#f01f0a",
    watch: "#9AECB3",
    watchHover: "#5DEF89",
    add: "#82E5D3",
    addHover: "#7FDED9",
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AddMovie />
      <div className="lists">
        <UnWatchedList />
        <WachedList />
      </div>
    </ThemeProvider>
  );
}

export default App;
