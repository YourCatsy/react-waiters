import React from "react";
import Product from "./Product";
export default function Products(props) {
  return (
    <div className='products'>
      {props.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
