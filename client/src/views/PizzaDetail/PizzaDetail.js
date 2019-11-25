import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import PizzaDetailTable from "./PizzaDetailTable";
import PizzaDetailAddTopping from "./PizzaDetailAddTopping";

class PizzaDetail extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id }
      },
      fetchPizza,
      fetchToppings
    } = this.props;
    fetchPizza(id);
    fetchToppings();
  }

  render() {
    const {
      selectedPizza,
      deleteToppingFromPizza,
      toppings,
      addToppingToPizza,
      resetAddToppingToPizzaForm
    } = this.props;
    console.log(selectedPizza);
    return (
      <>
        <h1>Pizza: {selectedPizza ? selectedPizza.name : ""} </h1>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <h3>Add Topping to this Pizza</h3>
                <PizzaDetailAddTopping
                  toppings={toppings}
                  resetAddToppingToPizzaForm={resetAddToppingToPizzaForm}
                  pizza={selectedPizza}
                  addToppingToPizza={addToppingToPizza}
                />
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
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </>
    );
  }
}

export default PizzaDetail;
