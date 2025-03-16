'use client'
import { useEffect, useState } from "react";
import CustomerHeader from "./_components/CustomerHeader";
import RestaurantFooter from "./_components/RestaurantFooter";


export default function Home() {
  const [location, setLocation] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const [selectLocation, setSelectedLocation] = useState('');
  const [showLocation, setShowLocation] = useState(false);

  useEffect(() => {
    loadLocation();
    loadRestaurant();
  }, [])

  const loadLocation = async () => {
    let response = await fetch('http://localhost:3000/api/customer/location');
    response = await response.json();
    if (response.success) {
      setLocation(response.result);
    }
  }
  const loadRestaurant = async (params) => {
    let url = "http://localhost:3000/api/customer";
    if (params?.location) {
      url = url + "?location=" + params.location;
    } else if (params?.restaurant) {
      url = url + "?restaurant=" + params.restaurant;
    }
    let response = await fetch(url);
    response = await response.json();
    if (response.success) {
      setRestaurant(response.result);
    }

  }
  const handleItem = (item) => {
    setSelectedLocation(item);
    setShowLocation(false);
    loadRestaurant({ location: item })
  }
  return (
    <div>
      <CustomerHeader />
      <div className="main-page-banner">
        <h1>Food Delivery App</h1>
        <div className="input-wrapper">
          <input type="text" className="select-input" value={selectLocation} readOnly
            onClick={() => setShowLocation(true)} placeholder="Select Place " />
          <ul className="location-list">
            {
              showLocation && location.map((item, index) => (
                <li key={index} onClick={() => handleItem(item)}>{item}</li>
              ))
            }
          </ul>
          <input type="text" className="search-input" placeholder="Enter food or Restaurant Name " onChange={(e) => loadRestaurant({ restaurant: e.target.value })} />
        </div>
      </div>
      <div className="restaurant-list">
        {restaurant.map((item) => (
          <div className="restaurant-wrapper">
            <div className="heading-wrapper">
              <h3>{item.restaurantName}</h3>

            </div>
            <div className="address-wrapper">
              <div>Contact:{item.contactNumber}</div>
              <div>Email:{item.email}</div>
              <div>{item.address}</div>
              <div>{item.city}</div>
            </div>
          </div>
        ))}
      </div>
      <RestaurantFooter />
    </div>
  );
}
