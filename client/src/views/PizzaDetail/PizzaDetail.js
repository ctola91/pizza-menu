import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import PizzaDetailTable from "./PizzaDetailTable";

class PizzaDetail extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id }
      },
      fetchPizza
    } = this.props;
    fetchPizza(id);
  }

  render() {
    const { selectedPizza, deleteToppingFromPizza } = this.props;
    console.log(selectedPizza);
    return (
      <>
        <h1>Pizza: {selectedPizza ? selectedPizza.name : ""} </h1>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <h3>Add Topping to this Pizza</h3>
                {/* <PizzaForm
                  addPizza={addPizza}
                  resetPizzaForm={resetPizzaForm}
                /> */}
              </Grid.Column>
              <Grid.Column width={8}>
                <h3>Pizza</h3>
                {selectedPizza && selectedPizza.toppings.length > 0 ? (
                  <PizzaDetailTable
                    toppings={selectedPizza.toppings}
                    deleteToppingFromPizza={deleteToppingFromPizza}
                  />
                ) : (
                  <p>There is no toppings added to this pizza.</p>
                )}
                {/* <PizzaTable
                  pizzas={pizzas}
                  deletePizza={deletePizza}
                  updatePizza={updatePizza}
                /> */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </>
    );
  }
}

export default PizzaDetail;
