"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const RestaurantHeader = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [details, setDetails] = useState();
  useEffect(() => {
    let data = localStorage.getItem("restaurantUser");
    if (!data && pathName == "/restaurant/dashboard") {
      router.push("/restaurant");
    } else if (data && pathName == "/restaurant") {
      router.push("/restaurant/dashboard");
    } else {
      setDetails(JSON.parse(data));
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("restaurantUser");
    router.push("/restaurant");
  };
  return (
    <div className="header-wrapper">
      <div>
        <img style={{ width: 100 }} src="delivery.jpg" />
      </div>
      <div className="header-list">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          {details && details.restaurantName ? (
            <>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
              <li>
                <Link href="/">Profile</Link>
              </li>
            </>
          ) : (
            <li>
              <Link href="/">Login/Signup</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantHeader;
