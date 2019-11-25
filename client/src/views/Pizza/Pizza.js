import React, { Component } from "react";
import { array, func } from "prop-types";
import { Container, Grid } from "semantic-ui-react";

import PizzaTable from "./PizzaTable";
import PizzaForm from "./PizzaForm";
class Pizza extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      limit: 5,
    }
  }

  componentDidMount() {
    const { fetchPizzas } = this.props;
    fetchPizzas(this.state.limit, this.state.page);
  }

  render() {
    const {
      pizzas,
      deletePizza,
      updatePizza,
      addPizza,
      resetPizzaForm
    } = this.props;
    return (
      <div>
        <h1>Pizza Menu</h1>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <h3>Add Pizza</h3>
                <PizzaForm
                  addPizza={addPizza}
                  resetPizzaForm={resetPizzaForm}
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <h3>Pizza</h3>
                <PizzaTable
                  pizzas={pizzas}
                  deletePizza={deletePizza}
                  updatePizza={updatePizza}
                />
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
  fetchPizzas: func,
  addPizza: func,
  deletePizza: func,
  updatePizza: func,
  resetPizzaForm: func
};

export default Pizza;
