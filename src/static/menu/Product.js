import React from "react";

function Product({ product }) {
  return (
    <div className='single_item unit_menu' >
      <h2 className='name_second'>{product.title}</h2>
      <p >{product.desc}</p>
      <h3>${product.price}</h3>
    </div>
  );
}

export default Product;
