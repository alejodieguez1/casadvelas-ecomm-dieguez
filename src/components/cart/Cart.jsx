import { useContext } from "react";
import { Link } from "react-router-dom";
import { Contexto } from "../../context/CartContext";

export default function Cart() {
  const { cart, getItemPrice, emptyCart, deleteItem } = useContext(Contexto);

  return (
    <>
      {cart.length > 0 ? (
        <div>
          {cart.map((item, index) => {
            return (
              <div key={index} className="product-container">
                <div id="product-detail">
                  <img
                    src={item.image}
                    alt="producto"
                    className="product-img"
                  />
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <p>Cantidad:{item.qty}</p>
                  <br />
                  <button
                    type="button"
                    className="btn"
                    onClick={() => deleteItem(item.id)}
                  >
                    Quitar del carrito
                  </button>
                </div>
              </div>
            );
          })}
          <p>Final Price: ${getItemPrice()}</p>
          <Link to="/checkout">
            <button type="button" className="btn">
              Finalizar pedido
            </button>
          </Link>
          <button type="button" className="btn" onClick={() => emptyCart()}>
            Vaciar carrito
          </button>
        </div>
      ) : (
        <>
          <div>El carrito esta vacio</div>
          <Link to="/products">
            <button type="button" className="btn">
              Busca productos
            </button>
          </Link>
        </>
      )}
    </>
  );
}
