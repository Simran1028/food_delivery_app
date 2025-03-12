const FoodItemList=()=>{
return(
    <>
    <h1>Food Item List</h1>
    <table>
        <thead>
            <tr>
                <td>SNo.</td>
                <td>Name</td>
                <td>Price</td>
                <td>Description</td>
                <td>Image</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Burger</td>
                <td>80</td>
                <td>Delicious</td>
                <td>image</td>
                <td><button>Edit</button><button>Delete</button></td>
            </tr>
        </tbody>
    </table>
    </>
)
}
export default FoodItemList;