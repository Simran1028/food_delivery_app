import Link from "next/link";


const RestaurantHeader=()=>{
return(
    <div className="header-wrapper">
    <div>
        <img style={{width:100}} src="delivery.jpg"/>
    </div>
    <div className="header-list">
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/'>About</Link>
            </li>
            <li>
                <Link href='/'>Contact Us</Link>
            </li>
        </ul>
    </div>
    </div>
)
}
export default RestaurantHeader;