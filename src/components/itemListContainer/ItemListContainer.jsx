import React from "react";
import ItemCount from "../itemCounter/ItemCount";
import "./main.css";

export default function ItemListContainer() {
  return (
    <section id="main-section">
      <ItemCount initial={1} stock={15}/>
      <ItemCount initial={1} stock={5}/>
      <ItemCount initial={1} stock={10}/>
      <ItemCount initial={1} stock={3}/>
      <ItemCount initial={1} stock={0}/>
    </section>
  );
}
