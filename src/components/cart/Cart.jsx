import { useContext } from "react";
import { Link } from "react-router-dom";
import { Contexto } from "../../context/CartContext";

export default function Cart() {
  const { cart, getItemPrice, emptyCart, deleteItem } = useContext(Contexto);

  return (
    <>
      {cart.length > 0 ? (
        <section id="cart-section">
          {cart.map((item, index) => {
            return (
              <div key={index} className="itemsContainer">
                <div className="product-container">
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
              </div>
            );
          })}
          <div id="total-section">
            <p>Precio final: ${getItemPrice()}</p>
            <Link to="/checkout">
              <button type="button" className="btn cart-btn">
                Finalizar pedido
              </button>
            </Link>
            <button type="button" className="btn cart-btn" onClick={() => emptyCart()}>
              Vaciar carrito
            </button>
          </div>
        </section>
      ) : (
        <section id="empty-section">
          <div className="empty-container">
            <p className="empty-name">El carrito esta vacio :(</p>
            <Link to="/products">
              <button type="button" className="btn">
                Busca productos
              </button>
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
