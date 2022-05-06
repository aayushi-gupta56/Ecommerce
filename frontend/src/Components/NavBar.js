import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import { Badge } from '@material-ui/core'
import React from "react";
import './Components.css';

const NavBar = ()=>{
    return (
        <div className="nav-container">
            <div className="nav-wrapper">
                <div className="nav-left">
                    <div className='language'>EN</div>
                    <div className='search-Input'>
                        <input type='text' placeholder='Search'></input>
                        <AiOutlineSearch/>
                    </div>
                </div>
                <div className="nav-center">
                    URBAN.
                </div>
                <div className="nav-right">
                    <ul>
                        <li>REGISTER</li>
                        <li>SIGN-IN</li>
                        <li>
                            <Badge badgeContent={0} showZero color='primary' className='small-badge'>
                                <AiOutlineShoppingCart className='largeIcon'/>
                            </Badge>
                        </li>
                        <li>
                            <Badge badgeContent={5} showZero color='primary'>
                                <AiOutlineHeart className='largeIcon'/>
                            </Badge>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;