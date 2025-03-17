'use client'
import CustomerHeader from "@/app/_components/CustomerHeader";
import { useEffect, useState, use } from "react";
import { useSearchParams } from "next/navigation";
import RestaurantFooter from "@/app/_components/RestaurantFooter";

const Details = ({ params: paramsPromise }) => {
    const params = use(paramsPromise);
    const { name } = params;
    const searchParams = useSearchParams();
    const id = searchParams?.get("id");
    const [restaurantDetails, setRestaurantDetails] = useState();
    const [foodItems, setFoodItems] = useState([]);


    const loadFoodItems = async (id) => {
        if (!id) return;
        let response = await fetch('http://localhost:3000/api/customer/' + id);
        response = await response.json();
        if (response.success) {
            setRestaurantDetails(response.details);
            setFoodItems(response.foodItems);
        }
    }
    useEffect(() => {
        if (id) {
            loadFoodItems(id);
        }
    }, [id])

    return (
        <div>
            <CustomerHeader />
            <div className="restaurant-page-banner">
                <h1>{decodeURI(name)}</h1>
            </div>
            <div className="detail-wrapper">
                <h3>{restaurantDetails?.email}</h3>
                <h3>{restaurantDetails?.contactNumber}</h3>
                <h3>{restaurantDetails?.address}</h3>
                <h3>{restaurantDetails?.city}</h3>
            </div>
            <div className="food-item-wrapper">
                {foodItems.length>0?foodItems.map((item, index) => (
                    <div className="list-item" key={index}>
                        <div className="image-container">
                            <img src={item.imageURL} alt={item.name} />
                        </div>
                        <div className="food-info">
                            <h3 className="food-name">{item.name}</h3>
                            <p className="food-price">₹{item.price}</p>
                            <p className="description">{item.description}</p>
                            <button className="add-to-cart-btn">Add to Cart</button>
                        </div>
                    </div>
                ))
            :
            <h1>No food item added for now !!</h1>
            }
            </div>

            <RestaurantFooter />
        </div>
    )
}
export default Details;