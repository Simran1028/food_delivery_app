import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const FoodItemList = () => {
  let router = useRouter();
  const [foodItems, setFoodItems] = useState();

  useEffect(() => {
    loadFoodItems();
  }, []);

  let loadFoodItems = async () => {
    let restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
    let restro_id = restaurantData._id;
    let response = await fetch(
      "http://localhost:3000/api/restaurant/food/" + restro_id
    );
    response = await response.json();
    if (response.success) {
      setFoodItems(response.result);
    } else {
      alert("Food Item List not loading.");
    }
  };
  let deleteFoodItems = async (id) => {
    let response = await fetch(
      "http://localhost:3000/api/restaurant/food/" + id,
      {
        method: "delete",
      }
    );
    response = await response.json();
    if (response.success) {
      loadFoodItems();
    } else {
      alert("Food Item not deleted.");
    }
  };
  return (
    <>
      <h1>Food Item List</h1>
      <table>
        <thead>
          <tr>
            <td>SNo.</td>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Image</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {foodItems &&
            foodItems.map((item, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.foodName}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <img src={item.imageURL}></img>
                </td>
                <td>
                  <button onClick={() => router.push("dashboard/" + item._id)}>
                    Edit
                  </button>
                  <button onClick={() => deleteFoodItems(item._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
export default FoodItemList;
