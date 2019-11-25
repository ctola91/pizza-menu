import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  fetchToppings,
  resetAddToppingToPizzaForm
} from "../../actions/toppingActions";
import {
  fetchPizzas,
  fetchPizza,
  addToppingToPizza,
} from "../../actions/pizzaActions";
import PizzaDetail from "./PizzaDetail";

const mapStateToProps = ({ pizza, topping }) => ({
  toppings: topping.toppings,
  selectedPizza: pizza.selectedPizza,
  pizzas: pizza.pizzas
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPizzas,
      fetchPizza,
      fetchToppings,
      resetAddToppingToPizzaForm,
      addToppingToPizza,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PizzaDetail);
