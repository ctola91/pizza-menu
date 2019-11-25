import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  addTopping,
  deleteTopping,
  fetchTopping,
  fetchToppings,
  updateTopping,
  resetToppingForm,
  fetchToppingsByPizza
} from "../../actions/toppingActions";
import { fetchPizzas } from '../../actions/pizzaActions';
import Toppings from "./Toppings";

const mapStateToProps = ({ topping, pizza }) => ({ toppings: topping.toppings, pizzas: pizza.pizzas });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTopping,
      fetchToppingsByPizza,
      deleteTopping,
      fetchTopping,
      fetchToppings,
      updateTopping,
      resetToppingForm,
      fetchPizzas
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Toppings);
