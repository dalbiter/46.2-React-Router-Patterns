import React from 'react';
import { NavLink } from 'react-router-dom';
import './FoodNav.css';

const defaultFoods = ["burrito", "salad", "sushi", "pasta"]
const FoodNav = ({ foods = defaultFoods }) => {
    return (
        // <nav>
        //     {foods.map(food => {
        //         <NavLink exact to={`/food/${food}`}>Show me the {food}!</NavLink>
        //     })}
        // </nav>
        <nav className="FoodNav">
            <NavLink exact to="/food/burrito">Burrito</NavLink>
            <NavLink exact to="/food/salad">Salad</NavLink>
            <NavLink exact to="/food/sushi">Sushi</NavLink>
            <NavLink exact to="/food/pasta">Pasta</NavLink>
        </nav>
    );
};

export default FoodNav;