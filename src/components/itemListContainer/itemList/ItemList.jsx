import { Item } from "../item/Item";

export default function ItemList({ productos }) {
  return (
    <div className="itemsContainer">
      {productos.map((producto) => {
        return <Item key={producto.id} producto={producto} />;
      })}
    </div>
  );
}
