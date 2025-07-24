import React, {useState} from "react";
import './home.css'
import Header from '../../components/header/Header'
import Exploremenu from '../../components/exploremenu/Exploremenu'
import Fooddisplay from "../../components/fooddisplay/Fooddisplay";
import Banner from "../../components/bannner/Banner";



const Home = () => {

    const [category,setCategory] =useState("All")
  return (
    <>
    <div className='cont'>

        <Header/>
        <Exploremenu category={category} setCategory={setCategory} />
        <Fooddisplay category={category}/>
        <Banner/>
        
      
    </div>

    

    


    </>

    


  )
}

export default Home
