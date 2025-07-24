import React, { useState } from 'react';
import Exploremenu from '../../components/exploremenu/Exploremenu';
import Fooddisplay from '../../components/fooddisplay/Fooddisplay';
import './menu.css';
const Menu = () => {
  const [category, setCategory] = useState("All");

  return (

    <div>
        
    <div className="space">

        
    </div>
      <Exploremenu category={category} setCategory={setCategory} />
      <Fooddisplay category={category} />
    </div>
  );
};

export default Menu;
