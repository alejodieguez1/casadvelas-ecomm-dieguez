import React from 'react';

export const Item = ({producto}) => {
  return <div className='item-container'>
      <img src={producto.image}/>
      <span className='spacer'/>
      <h2>{producto.name}</h2>
      <h3>${producto.price}</h3>
      <button>Ver detalle del producto</button>
  </div>;
};
