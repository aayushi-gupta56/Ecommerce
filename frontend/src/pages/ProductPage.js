import React from 'react';
import Navbar from '../Components/NavBar'
import Announcements from '../Components/Announcements'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import './Pages.css';
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

const ProductPage = ()=>{
    return(
        <div className='productPage'>
            <Navbar />
            <Announcements />
            <div className='product-page-wrapper'>
                <div className='product-image-Container'>
                    <img src='./images/denimJumpsuit.jfif' alt='Denim Jumpsuit' className='product-image'></img>
                </div>
                <div className='product-desc'>
                    <h1 className='name'>Denim Jumpsuit</h1>
                    <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis 
                        arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, 
                        volutpat ornare.</p>
                    <span className='price'>$ 20</span>
                    <div className='filter-Container'>
                        <div className='filter'>
                            <div className='filter-name'>Color</div>
                            <div className="filter-color" style={{backgroundColor:"black"}}></div>
                            <div className="filter-color" style={{backgroundColor:"blue"}}></div>
                            <div className="filter-color" style={{backgroundColor:"gray"}}></div>
                        </div>
                        <div className='filter size-filter'>
                            <div className='filter-name'>Size</div>
                            <div class="filter-size">
                                <select name='size-option' id='size-options' className='size-options'>
                                    <option value="xsmall">XS</option>
                                    <option value="small">S</option>
                                    <option value="medium">M</option>
                                    <option value="large" selected>L</option>
                                    <option value="xlarge">XL</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='add-container'>
                        <div className='amount-container'>
                        <RemoveIcon className='amount-icon'/>
                        <div id='amount'>1</div>
                        <AddIcon className='amount-icon'/>
                        </div>
                        <button className='add-to-cart'>
                            Add TO CART
                        </button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductPage;