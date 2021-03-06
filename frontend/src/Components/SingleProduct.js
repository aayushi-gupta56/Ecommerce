import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import './Components.css';
import {PF} from '../publicFolder'

const SingleProduct = ({item})=>{
    return(
        <div className='prod-container'>
            <div className='circle'></div>
            <img src={`${PF}${item.src}`} alt={item.name} className='prod-img'></img>
            <div className='prod-info'>
                <AiOutlineShoppingCart className='prod-icon'/>
                <AiOutlineSearch className='prod-icon'/>
                <AiOutlineHeart className='prod-icon'/>
            </div>
        </div>
    )
}

export default SingleProduct;