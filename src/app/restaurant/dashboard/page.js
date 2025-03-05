'use client'
import RestaurantHeader from "@/app/_components/RestaurantHeader";
import './../style.css'
import AddFoodItem from "@/app/_components/AddFoodItem";
import { useState } from "react";

const DashboardPage=()=>{
    const[addItem,setAddItem]=useState(false);
return (
  <>
    <RestaurantHeader />
    <button onClick={() => setAddItem(true)}>Add Food</button>
    <button onClick={() => setAddItem(false)}>Dashboard</button>
    {addItem ? <AddFoodItem /> : <h1>Welcome to the Dashboard !!</h1>}
  </>
);
}
export default DashboardPage;