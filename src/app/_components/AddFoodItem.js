"use client";
import { useState } from "react";

const AddFoodItem = (props) => {
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleAddItem = async () => {
    console.log(foodName, price, imageURL, description);
    if (!foodName || !price || !imageURL || !description) {
      setError(true);
      return false;
    } else {
      setError(false);
    }
    let restro_id;
    const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
    if (restaurantData) {
      restro_id = restaurantData._id;
    }
    let response = await fetch("http://localhost:3000/api/restaurant/food", {
      method: "POST",
      body: JSON.stringify({
        foodName,
        price,
        imageURL,
        description,
        restro_id,
      }),
    });
    response = await response.json();
    if (response.success) {
      alert("Food Item added successfully");
      props.setAddItem(false);
    }else{
        alert("Food Item not added successfully");
    }
  };

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
        {error && !foodName && (
          <span className="input-error">Add valid Food Name</span>
        )}
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {error && !price && (
          <span className="input-error">Add valid Price</span>
        )}
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        {error && !imageURL && (
          <span className="input-error">Add valid Image URL</span>
        )}
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Food Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {error && !description && (
          <span className="input-error">Add valid Description</span>
        )}
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
