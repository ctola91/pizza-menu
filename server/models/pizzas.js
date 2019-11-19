import mongoose from "mongoose";

let Schema = mongoose.Schema;

const PizzaSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = () => {
  return mongoose.model("Pizza", PizzaSchema);
};
