import React from 'react';
import {categories} from '../data';
import './Components.css';

const Categories = ()=>{
    return (
        <div className='categories'>
            {categories.map((item)=>{
                return(
                    <div className='category-container'>
                        <img src={item.src} className='category-img' alt={item.name}></img>
                        <div className='category-info'>
                            <div className='category-title'>{item.name}</div>
                            <button className='category-button'>SHOP NOW</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Categories;