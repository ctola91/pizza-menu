import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  addPizza,
  deletePizza,
  fetchPizza,
  fetchPizzas,
  updatePizza
} from "../../actions/pizzaActions";
import Pizza from "./Pizza";

const mapStateToProps = ({ pizza }) => ({ pizzas: pizza.pizzas });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addPizza,
      deletePizza,
      fetchPizza,
      fetchPizzas,
      updatePizza
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Pizza);
