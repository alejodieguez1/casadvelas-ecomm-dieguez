import { Item } from '../item/Item';


function ItemList({productos}) {
  return (
    <div className="itemsContainer">
      {
        productos.map((producto) => {
          return (
            <Item key={producto.id} producto={producto}/>
          )
        })
      }
    </div>
    )
  };

export default ItemList;
