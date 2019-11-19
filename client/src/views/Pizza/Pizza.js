import React, { Component } from "react";
import { array, func } from "prop-types";
import { Container, Grid } from "semantic-ui-react";

import PizzaTable from "./PizzaTable";
class Pizza extends Component {
  componentDidMount() {
    const { fetchPizzas } = this.props;
    fetchPizzas();
  }

  render() {
    const { pizzas, deletePizza, updatePizza } = this.props;
    return (
      <div>
        <h1>Pizza Menu</h1>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <h3>Add Pizza</h3>
              </Grid.Column>
              <Grid.Column width={8}>
                <h3>Pizza</h3>
                <PizzaTable pizzas={pizzas} deletePizza={deletePizza} updatePizza={updatePizza} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

Pizza.propTypes = {
  pizzas: array,
  fetchPizzas: func
};

export default Pizza;
