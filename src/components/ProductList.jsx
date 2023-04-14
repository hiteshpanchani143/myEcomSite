import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({show}) => {
  return (
     <>
      <div className='crypto_list'>
         <div className="row"> 

{
    show.map((item,index)=>(
        <div className="col-lg-3 col-md-3 col-12">
        <ProductCard key={index} {...item}/>
        </div>
    ))
}
</div>
</div>

     </>
  );
}

export default ProductList;

