import mongoose from "mongoose";

const restaurantsModel = new mongoose.Schema({
  name: String,
  email:String,
  password:String,
  restaurantName:String,
  city:String,
  address:String,
  contactNumber:String,
});
export const restaurantsSchema=mongoose.models.restaurants||mongoose.model("restaurants",restaurantsModel)