"use client";
import React from "react";
import { useState } from "react";
import MyRestaurantLogin from "../_components/MyRestaurantLogin";
import MyRestaurantSignUp from "../_components/MyRestaurantSignUp";

const Page = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="container">
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
    </div>
  );
};

export default Page;
