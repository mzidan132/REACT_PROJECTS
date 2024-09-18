import React, { useContext, useState } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import { FoodItem } from '../FoodItem/FoodItem';
import ExploreMenu from '../ExploreMenu/ExploreMenu';  // Import the vertical navbar

const FoodDisplay = () => {
  const { food_list } = useContext(StoreContext); // food_list array
  const [category, setCategory] = useState('All');

  // Ensure food_list is defined and is an array
  if (!Array.isArray(food_list)) {
    return <div>Loading...</div>; // Or handle the loading state as needed
  }

  return (
    <div className='layout'>
      <ExploreMenu category={category} setCategory={setCategory} />

      <div className='food-display'>
        <div className="food-display-list">
          {food_list.map((item, index) => {
  // Ensure each item is defined and has an _id
  if (!item || !item._id) return null; // Return null or some fallback UI if item is undefined or has no _id

  // Filter items based on category
  if (category === 'All' || category === item.category) {
    return (
      <FoodItem
        key={item._id}  // Safely use the _id after checking it's defined
        id={item._id}
        name={item.name}
        description={item.description}
        price={item.price}
        image={item.image}
      />
    );
  }
  return null;
})}
        </div>
      </div>
    </div>
  );
};

export default FoodDisplay;

