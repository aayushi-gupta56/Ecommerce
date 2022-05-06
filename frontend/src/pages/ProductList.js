import React from 'react';
import Announcements from '../Components/Announcements';
import NavBar from '../Components/NavBar';
import Products from '../Components/Products';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer'
import "./Pages.css";

const ProductList = ()=>{
    return (
        <div className='product-list-page'>
            <NavBar/>
            <Announcements/>
            <div className='title'>
                Dresses
            </div>
            <div className='filters'>
                <div className='filter-types'>
                    <p>Filter Products:</p>
                    <div className='filter-select-div'>
                        <label for="colors"></label>
                        <select name="colors" id="colors" className='filter-select'>
                            <option disabled>Color</option>
                            <option value="yellow" selected>Yellow</option>
                            <option value="white">White</option>
                            <option value="black">Black</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="red">Red</option>
                        </select>
                    </div>
                    <div className='filter-select-div'>
                        <label for="size"></label>
                        <select name="size" id="size" className='filter-select'>
                            <option disabled>Size</option>
                            <option value="xsmall">XS</option>
                            <option value="small">S</option>
                            <option value="medium">M</option>
                            <option value="large" selected>L</option>
                            <option value="xlarge">XL</option>
                        </select>
                    </div>
                </div>
                <div className='filter-types'>
                    <p>Sort Products:</p>
                    <div className='filter-select-div'>
                        <label for="sort"></label>
                        <select name="sort" id="sort" className='filter-select'>
                            <option value="newest" selected>Newest</option>
                            <option value="ascPrice">Price (asc)</option>
                            <option value="descPrice">Price (desc)</option>
                        </select>
                    </div>
                </div>
            </div>
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductList;