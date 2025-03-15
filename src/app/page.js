'use client'
import { useEffect, useState } from "react";
import CustomerHeader from "./_components/CustomerHeader";
import RestaurantFooter from "./_components/RestaurantFooter";


export default function Home() {
  const [location, setLocation] = useState([]);
  const [selectLocation, setSelectedLocation] = useState('');
  const [showLocation, setShowLocation] = useState(false);

  useEffect(() => {
    loadLocation();
  }, [])

  const loadLocation = async () => {
    let response = await fetch('http://localhost:3000/api/customer/location');
    response = await response.json();
    if (response.success) {
      setLocation(response.result);
    }
  }

  const handleItem = (item) => {
    setSelectedLocation(item);
    setShowLocation(false);
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
          <input type="text" className="search-input" placeholder="Enter food or Restaurant Name " />
        </div>
      </div>
      <RestaurantFooter />
    </div>
  );
}
