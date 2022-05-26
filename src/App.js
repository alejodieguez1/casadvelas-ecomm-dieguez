import logo from './logo.svg';
import NavBar from './components/navComponent/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  function saludar(){
    alert("Hola!");
  };
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={saludar}/>
    </div>
  );
}

export default App;
