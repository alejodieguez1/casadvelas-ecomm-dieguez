import React from 'react';

export const Item = ({producto}) => {
  return <div className='item-container'>
      <span className='spacer'/>
      <h2>{producto.name}</h2>
      <button>Ver detalle del producto</button>
  </div>;
};
