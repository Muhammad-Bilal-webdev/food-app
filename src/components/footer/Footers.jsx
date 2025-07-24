import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (

    <footer>

      <div className="footer py-4" >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start text-center">
            <div className="logo">
            <img src={assets.logo} alt="" />
            </div>
              <div className="footer-logo text-muted mb-3 mb-md-0 ">
                
                @ 2021.CODE4EDUCATION,All rights reserved.
              </div>
            </div>
            <div className="col-md-6 text-center">
              <p>Follow Us</p>

              <div className="footer-social pt-1">

                <a href="#"> <i className="fab fa-facebook-f"></i></a>
                <a href="#"> <i className="fab fa-twitter"></i></a>
                <a href="#"> <i className="fab fa-dribbble"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer
