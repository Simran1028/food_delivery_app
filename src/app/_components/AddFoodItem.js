"use client";
import { useState } from "react";

const AddFoodItem = () => {
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");

  const handleAddItem=()=>{
    console.log(foodName,price,imageURL,description);
  }

  return (
    <div className="container">
      <h1>Add Food Item</h1>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Food Item"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Food Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <button className="button" onClick={handleAddItem}>
          Add Food Item
        </button>
      </div>
    </div>
  );
};
export default AddFoodItem;
