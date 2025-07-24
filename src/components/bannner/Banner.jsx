import React from 'react'
import './Banner.css'
import { assets } from '../../assets/assets'


const Banner = () => {
  return (
    <div className='app-download' id='banner'>

        <p>For Better Experience Download <br /> Tomato App </p>

        <div className="download-platform">

            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default Banner
