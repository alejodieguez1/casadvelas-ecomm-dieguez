import { useNavigate } from "react-router-dom";

function ItemCount({ qty, setQty, stock, onAdd }) {

  let navigate = useNavigate();

  function counterPlus() {
    if (qty < stock) {
      setQty(qty + 1);
    }
  }
  function counterMinus() {
    if (qty > 1) {
      setQty(qty - 1);
    }
  }
  return (
    <div className="num-container">
      <div className="count-container">
        <button
          type="button"
          className="product-btn count-btn btn"
          onClick={() => counterMinus()}
        >
          -
        </button>
        <p>Cantidad:{qty}</p>
        <button
          type="button"
          className="product-btn count-btn btn"
          onClick={() => counterPlus()}
        >
          +
        </button>
      </div>
      <p>El stock de este producto es: {stock}</p>
      <button
        type="button"
        className="product-btn cart-btn btn"
        onClick={() => onAdd(qty)}
      >
        Add to cart
      </button>
      <button
        type="button"
        className="cart-btn btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
    </div>
  );
}

export default ItemCount;
