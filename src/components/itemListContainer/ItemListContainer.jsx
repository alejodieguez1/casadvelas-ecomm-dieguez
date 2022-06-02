import React from "react";
import ItemList from "./itemList/ItemList";
import "./main.css";

export default function ItemListContainer() {
  return (
      <div className="itemListContainer">
          <ItemList/>
      </div>
  );
}
