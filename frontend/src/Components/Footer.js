import React from 'react';
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaPhoneAlt, FaCcMastercard, FaCcPaypal, FaCcAmex, FaCcVisa, FaCcDiscover} from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import './Components.css'

const Footer = ()=>{
    return (
        <div className='footer'>
            <div className='footer-div'>
                <h1 className='site-heading'>URBAN.</h1>
                <p className='footer-desc'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
                    or randomised words which don’t look even slightly believable.</p>
                <ul>
                    <a><FaFacebook className='footer-social-icons facebook-background'/></a>
                    <a><FaInstagram className='footer-social-icons instagram-background'/></a>
                    <a><FaTwitter className='footer-social-icons twitter-background'/></a>
                    <a><FaPinterest className='footer-social-icons pinterest-background'/></a>
                </ul>
            </div>
            <div className='footer-div'>
                <h1 className='footer-heading'>Useful Links</h1>
                <div className='footer-links'>
                <ul className='footer-links-ul'>
                    <li>Home</li>
                    <li className='footer-links-list'>Man Fashion</li>
                    <li className='footer-links-list'>Accessories</li>
                    <li className='footer-links-list'>Order Tracking</li>
                    <li className='footer-links-list'>Wishlist</li>
                </ul>
                <ul>
                    <li>Cart</li>
                    <li className='footer-links-list'>Women Fashion</li>
                    <li className='footer-links-list'>My Account</li>
                    <li className='footer-links-list'>Wishlist</li>
                    <li className='footer-links-list'>Terms</li>
                </ul>
                </div>
            </div>
            <div className='footer-div'>
                <h1 className='footer-heading'>Contact</h1>
                <ul>
                    <li><ImLocation className='footer-contact-icons'/> 622 Dixie Path, South Tobinchester 98336</li>
                    <li><FaPhoneAlt className='footer-contact-icons'/> +1 234 56 78</li>
                    <li><MdEmail className='footer-contact-icons'/> contact@lama.dev</li>
                    <li className='footer-partner-list'>
                        <FaCcMastercard className='footer-partner-icons mastercard-background'/>
                        <FaCcPaypal className='footer-partner-icons paypal-background'/>
                        <FaCcAmex className='footer-partner-icons amex-background'/>
                        <FaCcVisa className='footer-partner-icons visa-background'/>
                        <FaCcDiscover className='footer-partner-icons discover-background'/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;