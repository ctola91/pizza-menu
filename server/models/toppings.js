import mongoose from "mongoose";

let Schema = mongoose.Schema;

const ToppingSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = () => {
  return mongoose.model("Topping", ToppingSchema);
};
