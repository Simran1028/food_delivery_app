"use client";
import React from "react";
import { useState } from "react";
import MyRestaurantLogin from "../_components/MyRestaurantLogin";
import MyRestaurantSignUp from "../_components/MyRestaurantSignUp";
import RestaurantHeader from "../_components/RestaurantHeader";
import RestaurantFooter from "../_components/RestaurantFooter";
import './style.css';

const Page = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="container">
      <RestaurantHeader />
      <h1>Restaurant Login/Signup</h1>
      {login ? <MyRestaurantLogin /> : <MyRestaurantSignUp />}
      <div>
        <button
          className="btn-link"
          onClick={() => {
            setLogin(!login);
          }}
        >
          {login
            ? "Do not have account? Sign Up"
            : "Already have account? Login"}
        </button>
      </div>
      <RestaurantFooter/>
    </div>
  );
};

export default Page;
