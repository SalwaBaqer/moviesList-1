//components
import UnWatchedList from "./components/UnWatchedList";
import WachedList from "./components/WachedList";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <>
      <AddMovie />
      <h1>Movies List</h1>
      <UnWatchedList />
      <WachedList />
    </>
  );
}

export default App;
