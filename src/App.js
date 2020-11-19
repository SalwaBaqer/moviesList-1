//components
import UnWatchedList from "./components/UnWatchedList";
import WachedList from "./components/WachedList";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <>
      <AddMovie />
      <UnWatchedList />
      <WachedList />
    </>
  );
}

export default App;
