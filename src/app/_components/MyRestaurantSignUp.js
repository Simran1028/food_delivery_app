
import { useRouter } from "next/navigation";
import { useState } from "react";
const MyRestaurantSignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleSignUp = async () => {
    console.log(email, password, restaurantName, city, address, contactNumber);
    let response = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        restaurantName,
        city,
        address,
        contactNumber,
      }),
    });
    response = await response.json();
    console.log(response);
    if (response.success) {
      alert("Restaurant registered successfully !! ");
      console.log(response);
      const { result } = response;
      delete result.password;
      localStorage.setItem("restaurantUser", JSON.stringify(result));
      router.push("/restaurant/dashboard");
    }
  };

  return (
    <>
      <h3>Sign Up</h3>
      <div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Enter Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Restaurant Name"
            className="input-field"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter City"
            className="input-field"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Full Address"
            className="input-field"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Contact Number"
            className="input-field"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <button className="button" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};
export default MyRestaurantSignUp;
