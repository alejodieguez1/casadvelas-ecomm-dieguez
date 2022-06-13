import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import NavBar from "./components/navComponent/NavBar";
import Products from "./components/products/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>  
          <Route path="/products" element={<Products/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

function NotFound() {
  return <>Ha llegado a una página que no existe</>;
}

export default App;
