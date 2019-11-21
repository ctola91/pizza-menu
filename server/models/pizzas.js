import mongoose from "mongoose";

let Schema = mongoose.Schema;

const PizzaSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  toppings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topping"
    }
  ]
});

module.exports = () => {
  return mongoose.model("Pizza", PizzaSchema);
};
