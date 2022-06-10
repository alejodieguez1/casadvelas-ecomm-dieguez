import NavBar from "./components/navComponent/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer/>
      <Footer/>
    </div>
  );
}

export default App;
