import { useContext } from "react";
import { Link } from "react-router-dom";
import { Contexto } from "../../context/CartContext";
import '../itemDetailContainer/itemDetail/itemDetail.css'

export default function Cart() {
  const { cart, getItemPrice} = useContext(Contexto);

  return (
    <>
      {cart.length > 0 ? (
        <div>
          {cart.map((item, index) => {
            return (
              <div key={index} className="product-container">
                <div id="product-detail">
                <img src={item.image} alt="producto" className="product-img"/>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <p>Cantidad:{item.qty}</p>
                <br />
                </div>
              </div>
            );
          })}
          <p>Final Price: ${getItemPrice()}</p>
        </div>
      ) : (
        <>
        <div>El carrito esta vacio</div>
        <Link to="/products"><button type="button" className="btn">Busca productos</button></Link>
        </>
      )}
    </>
  );
}
