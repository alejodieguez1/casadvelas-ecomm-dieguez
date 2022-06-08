import NavBar from "./components/navComponent/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
