import React, {useState} from "react";
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'

const Exploremenu = ({category,setCategory}) => {
  return (
    

        <div className="explore-menu container">

          <div className="container">

            <h1>Explore Our Menu</h1>
           

        <div className="explore-menu-list">

            {menu_list.map((items,index)=>{
              return(

                <div onClick={()=>setCategory(prev=>prev===items.menu_name?"All":items.menu_name)} key={index} className="menu-list-items">
                        <img className={category===items.menu_name?"active":""} src={items.menu_image} alt="" />
                        <p>{items.menu_name}</p>

                </div>

              )

            })}
        </div>

        </div>

        </div>
      
    
  )
}

export default Exploremenu
