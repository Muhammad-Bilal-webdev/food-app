import React, { useContext } from 'react';
import Fooditem from '../fooditem/Fooditem';
import './Fooddisplay.css';
import { StoreContext } from '../../context/context';

const Fooddisplay = ({ category }) => {
  const { food_list, searchTerm } = useContext(StoreContext);

  // ✅ Show all items initially, then apply filters
  const filteredFood = food_list.filter(item => {
    const matchesCategory = category === "All" || category === "" || category === item.category;
    const matchesSearch = searchTerm === "" || item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className='food-display container'>
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {filteredFood.length > 0 ? (
          filteredFood.map((item, index) => (
            <Fooditem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p>No food items match your search or category filter.</p>
        )}
      </div>
    </div>
  );
};

export default Fooddisplay;
