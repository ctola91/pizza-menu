import React, { Component } from "react";
import { array, func } from "prop-types";
import { Container, Grid, Button, Icon } from "semantic-ui-react";

import ToppingsTable from "./ToppingsTable";
import ToppingForm from './ToppingForm';
import ToppingsFilter from "./ToppingsFilter";
class Toppings extends Component {
  componentDidMount() {
    const { fetchToppings } = this.props;
    fetchToppings();
  }

  render() {
    const {
      toppings,
      pizzas,
      fetchPizzas,
      fetchToppings,
      fetchToppingsByPizza,
      addToppingByPizza,
      deleteTopping,
      updateTopping,
      addTopping,
      resetToppingForm
    } = this.props;
    return (
      <div>
        <h1>Topping: Menu</h1>
        <h2>Toppings</h2>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <h3>Add Topping</h3>
                <ToppingForm pizzas={pizzas} addTopping={addTopping} resetToppingForm={resetToppingForm} />
                {/* <h3>Filter By Pizza</h3>
                <ToppingsFilter
                  toppings={toppings}
                  pizzas={pizzas}
                  fetchPizzas={fetchPizzas}
                  fetchToppings={fetchToppings}
                  fetchToppingsByPizza={fetchToppingsByPizza}
                /> */}
              </Grid.Column>
              <Grid.Column width={8}>
                <h3>Toppings list</h3>
                <ToppingsTable
                  toppings={toppings}
                  deleteTopping={deleteTopping}
                  updateTopping={updateTopping}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

Toppings.propTypes = {
  toppings: array,
  pizzas: array,
  fetchToppings: func,
  fetchToppingsByPizza: func,
  addToppingByPizza: func,
  fetchPizzas: func,
  addTopping: func,
  deleteTopping: func,
  updateTopping: func,
  resetToppingForm: func
};

export default Toppings;
