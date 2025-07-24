import React, {useContext} from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/context'

const Fooditem = ({ id, name, description, price, image }) => {

const {Cartitems,Addtocart,RemovetoCart}=useContext(StoreContext);

    return (
        <div className='food-items'>

            <div className="food-items-image-container">
                <img className='food-items-img' src={image} alt="" />

                {!Cartitems[id]
                    ? <img className='add' onClick={()=>{Addtocart(id)}} src={assets.add_icon_white}  alt="" />
                    : <div className="count-btns">
                        <img onClick={()=>{RemovetoCart(id)}} src={assets.remove_icon_red}  alt="" />
                        <p>{Cartitems[id]}</p>
                        <img onClick={()=>{Addtocart(id)}}  src={assets.add_icon_green}  alt=""/>

                    </div>
            }
            </div>

           

            <div className="food-item-info">
                <div className="food-items-rating-img">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-items-description">{description}</p>
                <p className="food-items-price">${price}</p>

            </div>

        </div>
    )
}

export default Fooditem
