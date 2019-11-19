import mongoose from "mongoose";

let Schema = mongoose.Schema;

const ToppingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  pizza: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pizza",
    required: true
  }
});

module.exports = () => {
  return mongoose.model("Topping", ToppingSchema);
};
