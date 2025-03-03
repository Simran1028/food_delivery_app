"use client";
import React from "react";
import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/restaurantSignUp";

const Page = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="container">
      <h1>Restaurant Login/Signup</h1>
      {login ? <RestaurantLogin /> : <RestaurantSignUp />}
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
    </div>
  );
};

export default Page;
