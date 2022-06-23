import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const Contexto = createContext({});

const { Provider } = Contexto;

export default function CartContext({ children }) {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((x) => x.id === id);
  };

  const addItem = (item, qty) => {
    const newItem = {
      ...item,
      qty,
    };
    if (isInCart(newItem.id)) {
      const findItem = cart.find((x) => x.id === newItem.id);
      const itemIndex = cart.indexOf(findItem);
      const auxArray = [...cart];
      auxArray[itemIndex].qty += qty;
      setCart(auxArray);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const emptyCart = () => {
    setCart([]);
  };

  const deleteItem = (id) => {
    const updatedCart = cart.filter((element) => element.id !== id);
    setCart(updatedCart);
  };

  const getItemQty = () => {
    return cart.reduce((acc, x) => (acc += x.qty), 0);
  };

  const getItemPrice = () => {
    return cart.reduce((acc, x) => (acc += x.qty * x.price), 0);
  };

  return (
    <Provider
      value={{
        cart,
        setCart,
        isInCart,
        addItem,
        deleteItem,
        emptyCart,
        getItemQty,
        getItemPrice,
      }}
    >
      {children}
    </Provider>
  );
}
