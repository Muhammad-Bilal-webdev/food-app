import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom';

const Header = () => {

       const navigate = useNavigate();
    return (

    
        <div className="header container">

              

             
            
            <img src={assets.header_img} alt="" />
       


            <div className="header-content">

                <h1>Place Your Favourite Order</h1>
                <p>A modern, user-friendly food ordering platform designed to simplify the way customers browse,
                order, and enjoy meals from their favorite restaurants.This website caters to <br /> both individual diners and restaurant partners, offering seamless navigation, real-time updates, and secure payment options.
            </p>

               <button onClick={() => navigate('/menu')}>View Menu</button>

            </div>




        </div>

       
    )
}

export default Header
