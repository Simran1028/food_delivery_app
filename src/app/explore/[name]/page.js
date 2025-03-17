import CustomerHeader from "@/app/_components/CustomerHeader";

const Details = ({ params }) => {
    const { name } = params;
    return (
        <div>
            <CustomerHeader/>
            <div className="restaurant-page-banner">
                <h1>{decodeURI(name)}</h1>

            </div>
        </div>
    )
}
export default Details;