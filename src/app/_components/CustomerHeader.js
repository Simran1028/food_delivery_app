import Link from "next/link";

const CustomerHeader = () => {
    return (<>

        <div className="header-wrapper">
            <div>
                <img style={{ width: 100 }} src="/delivery.jpg" />
            </div>
            <div className="header-list">
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>


                    <li>
                    <Link href="/">Login</Link>
                    </li>
                    <li>
                        <Link href="/">SignUp</Link>
                    </li>

                    <li>
                        <Link href="/">Cart(0)</Link>
                    </li>
                    <li>
                        <Link href="/">Add Restaurant</Link>
                    </li>

                </ul>
            </div>
        </div>
    </>)
}

export default CustomerHeader;