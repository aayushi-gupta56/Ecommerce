import React, { useState } from 'react'
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';
import {sliderItems} from '../data';
import './Components.css';

const Slider = ()=>{

    const [slideNo, setSlideNo] = useState(0);

    const handleClickRight = ()=>{
        setSlideNo(slideNo==sliderItems.length-1?0:slideNo+1)
        document.getElementsByClassName('wrapper-slider')[0].style.transform = `translateX(${slideNo * -100}vw)`;
    }

    const handleClickLeft = ()=>{
        setSlideNo(slideNo==0?sliderItems.length-1:slideNo-1);
        document.getElementsByClassName('wrapper-slider')[0].style.transform = `translateX(${slideNo * -100}vw)`;
    }

    return (
        <div className='slider-container'>
                <GoTriangleLeft className='slider-arrow left-arrow' onClick={handleClickLeft}/>
                <div className='wrapper-slider'>
                {sliderItems.map((item)=>{
                    return(
                        <div key={item.id} className={`slide ${item.background}`}>
                            <div className='image-slider'>
                                <img src={item.src} className='img-slider' alt={item.title}></img>
                            </div>
                            <div className='info-slider'>
                                <div className='slider-title'>
                                    {item.title}
                                </div>
                                <div className='slider-desc'>
                                    {item.desc}
                                </div>
                                <button className='shopNow'>
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    );
                })}
                </div>
                <GoTriangleRight className='slider-arrow right-arrow' onClick={handleClickRight}/>
        </div>
    );
}

export default Slider;