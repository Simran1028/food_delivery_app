import mongoose from "mongoose";

const restaurantsModel=new mongoose.Schema({
    name: String,
   
});
export const restaurantsSchema=mongoose.models.restaurants||mongoose.model("restaurants",restaurantsModel)