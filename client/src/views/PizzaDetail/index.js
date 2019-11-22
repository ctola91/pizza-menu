import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchPizzas, fetchPizza } from '../../actions/pizzaActions';
import PizzaDetail from "./PizzaDetail";

const mapStateToProps = ({ pizza }) => ({ selectedPizza: pizza.selectedPizza, pizzas: pizza.pizzas });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPizzas,
      fetchPizza,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PizzaDetail);
