//components
import UnWatchedList from "./components/UnWatchedList";
import WachedList from "./components/WachedList";

//state
import { useState } from "react";

function App() {
  return (
    <>
      <h1>Movies List</h1>
      <UnWatchedList />
      <WachedList />
    </>
  );
}

export default App;
