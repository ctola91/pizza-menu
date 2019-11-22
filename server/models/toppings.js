import mongoose from "mongoose";

let Schema = mongoose.Schema;

const ToppingSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

ToppingSchema.post("remove", document => {
  const toppingId = document._id;
  Pizzas.find({ toppings: { $in: [toppingId] } }).then(pizzas => {
    Promise.all(
      pizzas.map(pizza =>
        Pizzas.findOneAndUpdate(
          pizza._id,
          { $pull: { toppings: toppingId } },
          { new: true }
        )
      )
    );
  });
});

module.exports = () => {
  return mongoose.model("Topping", ToppingSchema);
};
