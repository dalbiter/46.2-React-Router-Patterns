import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Food from './Food';
import FoodNav from './FoodNav';
import RouteList from './RouteList';
import Nav from './Nav';

function App() {

  return (
    <div>
      <BrowserRouter>
      <FoodNav />
        <Routes>
          <Route path="/food/:name" element={<Food />} />
          {/* <Route path="/food/burrito" element={<Food name="burrito" />} />
          <Route path="/food/salad" element={<Food name="salad" />} />
          <Route path="/food/sushi" element={<Food name="sushi" />} />
          <Route path="/food/pasta" element={<Food name="pasta" />} /> */}
        </Routes>

        <Nav />
        <RouteList />
      </BrowserRouter>  
    </div>
  );
};

export default App

       
