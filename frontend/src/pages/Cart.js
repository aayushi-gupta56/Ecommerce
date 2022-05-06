import Navbar from '../Components/NavBar';
import Announcements from '../Components/Announcements';
import Footer from '../Components/Footer';
import React from 'react';
import './Pages.css';
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'

const Cart = ()=>{
    return(
        <div className='cart-page'>
            <Navbar/>
            <Announcements />
            <div className='cart-wrapper'>
            <h1>YOUR BAG</h1>
            <div className='cart-top-container'>
            <button className='continue-shopping'>CONTINUE SHOPPING</button>
            <div className='cart-top-texts'>
                <span className='cart-top-text'>Shopping Bag(2)</span>
                <span className='cart-top-text'>Wishlist(0)</span>
            </div>
            <button className='checkout-now'>CHECKOUT NOW</button>
            </div>
            <div className='cart-bottom-container'>
                <div className='cart-product-info'>
                <div className='cart-product'>
                    <div className='cart-product-details'>
                        <img src='./images/cartShoes.webp' alt="Product" className='cart-product-image'></img>
                        <div className='cart-product-specs'>
                            <p><b>Product </b>JESSIE THUNDER SHOES</p>
                            <p><b>ID </b>93813718293</p>
                            <div className='cart-product-color' style={{backgroundColor:"black"}}></div>
                            <p><b>SIZE </b>37.5</p>
                        </div>
                    </div>
                    <div className='cart-product-price'>
                        <div className='product-amount-container'>
                            <AddIcon />
                            <div className='product-amount'>1</div>
                            <RemoveIcon />
                        </div>
                        <div className='product-total-price'>$ 20</div>
                    </div>
                </div>
                <div className='cart-product'>
                    <div className='cart-product-details'>
                        <img src='./images/cartTee.jpg' alt="Product" className='cart-product-image'></img>
                        <div className='cart-product-specs'>
                            <p><b>Product </b>JESSIE THUNDER SHOES</p>
                            <p><b>ID </b>93813718293</p>
                            <div className='cart-product-color' style={{backgroundColor:"gray"}}></div>
                            <p><b>SIZE </b>37.5</p>
                        </div>
                    </div>
                    <div className='cart-product-price'>
                    <div className='product-amount-container'>
                        <AddIcon />
                        <div className='product-amount'>2</div>
                        <RemoveIcon />
                    </div>
                    <div className='product-total-price'>$ 30</div>
                    </div>
                </div>
                </div> 
                <div className='cart-summary'>
                <h1>ORDER SUMMARY</h1>
                <div className='summary-charges'>
                    <p>Subtotal</p>
                    <p>$ 80</p>
                    <p>Shipping</p>
                    <p>$ 5.90</p>
                    <p>Discount</p>
                    <p>$ 5.90</p>
                    <p className='total-charges'>Total</p>
                    <p className='total-charges'>$ 80</p>
                </div>
                <button className='checkout-now summary-checkout'>CHECKOUT NOW</button>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart;