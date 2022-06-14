import React from 'react';

export const Item = ({producto}) => {
  return <div className='home-product'>
      <h2>{producto.name}</h2>
      <button>Ver detalle del producto</button>
  </div>;
};
