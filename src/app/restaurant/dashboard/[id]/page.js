"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditFoodItem = () => {
  const router = useRouter();
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleEditItem = async () => {
    console.log(foodName, price, imageURL, description);
    if (!foodName || !price || !imageURL || !description) {
      setError(true);
      return false;
    } else {
      setError(false);
    }
  };
  return (
    <div className="container">
      <h1>Update Food Item</h1>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Add Food Name"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
        {error && !foodName && (
          <span className="input-error">Add valid Food name</span>
        )}
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Add Price"
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
          placeholder="Add Image URL"
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
          placeholder="Add Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {error && !description && (
          <span className="input-error">Add valid description</span>
        )}
      </div>
      <div className="input-wrapper">
        <button className="button" onClick={handleEditItem}>
          Add Food Item
        </button>
      </div>
      <div className="input-wrapper">
        <button className="button" onClick={() => router.push("../dashboard")}>
          Back to Food Item List
        </button>
      </div>
    </div>
  );
};
export default EditFoodItem;
