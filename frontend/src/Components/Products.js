import React from 'react';
import { products } from '../data';
import './Components.css';
import SingleProduct from './SingleProduct';

const Products = ()=>{
    return(
        <div className='products'>
            {products.map((item)=>{
                return <SingleProduct item={item} key={item.id} />
            })}
        </div>
    );
}

export default Products;