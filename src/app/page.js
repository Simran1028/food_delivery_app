import CustomerHeader from "./_components/CustomerHeader";
import RestaurantFooter from "./_components/RestaurantFooter";


export default function Home() {

  return (
    <div>
      <CustomerHeader />
      <div className="main-page-banner">
        <h1>Food Delivery App</h1>
        <div className="input-wrapper">
          <input type="text" className="select-input" placeholder="Select Place "/>
          <input type="text" className="search-input" placeholder="Enter food or Restaurant Name "/>
        </div>
      </div>
      <RestaurantFooter />
    </div>
  );
}
