import React from 'react'
import '../index.css'
import Announcements from '../Components/Announcements';
import NavBar from '../Components/NavBar';
import Slider from '../Components/slider';
import Categories from '../Components/Categories';
import Products from '../Components/Products';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';

const Home = ()=>{
    return(
        <div className='homepage'>
            <Announcements />
            <NavBar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Home;