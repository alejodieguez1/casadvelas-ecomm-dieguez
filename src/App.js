import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import NavBar from "./components/navComponent/NavBar";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import CartContext from "./context/CartContext";
import { initializeApp } from "firebase/app";
import CartCheckout from "./components/cartCheckout/CartCheckout";
import './app.css'

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyB_2Pr8Vst4B1hVZPOBrx24wEtHvzwCKeU",
    authDomain: "casadvelas-ecomm-dieguez.firebaseapp.com",
    projectId: "casadvelas-ecomm-dieguez",
    storageBucket: "casadvelas-ecomm-dieguez.appspot.com",
    messagingSenderId: "944923055600",
    appId: "1:944923055600:web:59f45c813666c65be1b935",
  };

  initializeApp(firebaseConfig);

  return (
    <CartContext>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/products/category/:id"
              element={<ItemListContainer />}
            />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CartCheckout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartContext>
  );
}

function NotFound() {
  return <>Ha llegado a una página que no existe</>;
}

export default App;
