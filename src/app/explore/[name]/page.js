'use client'
import CustomerHeader from "@/app/_components/CustomerHeader";
import { useEffect, useState, use } from "react";
import { useSearchParams } from "next/navigation";

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
            <div>
                <h3>{restaurantDetails?.email}</h3>
                <h3>{restaurantDetails?.contactNumber}</h3>
                <h3>{restaurantDetails?.address}</h3>
                <h3>{restaurantDetails?.city}</h3>
            </div>
            <div>
                {foodItems.map((item, index) => (
                    <div>
                        <div key={index}>{item.name}</div>
                        <div>{item.price}</div>
                        <div>{item.description}</div>
                        <div><img style={{ width: 100 }} src={item.imageURL} /></div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Details;