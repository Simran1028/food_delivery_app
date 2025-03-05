const { default: mongoose } = require("mongoose");

const foodModel = new mongoose.Schema({
  foodName: String,
  price: Number,
  imageURL: String,
  description: String,
  restro_id: mongoose.Schema.Types.ObjectId,
});
export const foodSchema =
  mongoose.models.food || mongoose.model("food", foodModel);
