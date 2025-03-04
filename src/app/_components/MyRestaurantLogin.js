import { useState } from "react";

const MyRestaurantLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if(!email ||!password){
      setError(true);
    }else{
      setError(false);
    }
  };
  return (
    <>
      <h3>Login</h3>
      <div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && !email && (
            <span className="input-error">Email is required. Please enter a valid email address.</span>
          )}
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Enter Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && !password && (
            <span className="input-error">Password is required.</span>
          )}
        </div>
        <div className="input-wrapper">
          <button className="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};
export default MyRestaurantLogin;
