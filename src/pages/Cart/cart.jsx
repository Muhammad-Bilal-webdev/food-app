import React, { useContext, useState } from 'react'
import './cart.css'
import { StoreContext } from '../../context/context'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const cart = () => {

 
  const { getTotalCartAmount,Cartitems, food_list,  RemovetoCart, } = useContext(StoreContext);
  
  const navigate=useNavigate();

  return (
    <div className='cart1 container'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>

        </div>


        <hr />



        {food_list.map((item, index) => {

          if (Cartitems[item._id] > 0) {

            return (





              <div className="div">

                <div className="cart-items-title cart-items-item">

                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{Cartitems[item._id]}</p>
                  <p>${item.price * Cartitems[item._id]}</p>
                  <p className='cross' onClick={()=>RemovetoCart(item._id)}> <img src={assets.cross_icon} alt="" /></p>
                
                </div>
                <hr />

              </div>
            )
          }







        })}

      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-detail"> 
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
            <hr />
          </div>
          <button onClick={()=>navigate('/placeorder')}>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default cart
