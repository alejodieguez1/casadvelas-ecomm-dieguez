import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Contexto } from "../../../context/CartContext";
import ItemCount from "../../itemCounter/ItemCount";

export default function ItemDetail({ product }) {
  const [counter, setCounter] = useState(true);

  const [qty, setQty] = useState(1);

  const { isInCart, addItem } = useContext(Contexto);

  const onAdd = (qty) => {
    isInCart(product.id);
    addItem(product, qty);
    setCounter(false);
  };

  const { id, image, details, name, price, stock } = product;
  return (
    <div className="product-container">
      <div id="product-detail">
        <img src={image} alt="Productos" className="product-img" />
        <h2 className="product-name">{name}</h2>
        <p className="product-detail">{details}</p>
        <h3 className="product-price">${price}</h3>
        {counter ? (
          <ItemCount
            id={id}
            qty={qty}
            setQty={setQty}
            stock={stock}
            onAdd={onAdd}
          />
        ) : (
          <div>
            <button type="button" className="btn">
              <Link to="/products">Seguir comprando</Link>
            </button>
            <br />
            <button type="button" className="btn">
              <Link to="/cart">Ir al carrito</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
