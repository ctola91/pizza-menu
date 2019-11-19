import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { func, array } from "prop-types";

class ToppingsFilter extends Component {
  constructor() {
    super();
    this.state = {
      value: "all"
    };
  }

  componentDidMount() {
    const { fetchPizzas } = this.props;
    fetchPizzas();
  }

  handleChange = (e, { value }) => {
    this.setState({ value });
    const { fetchToppingsByPizza, fetchToppings } = this.props;
    if (value === "all") {
      fetchToppings();
    } else {
      fetchToppingsByPizza(value);
    }
  };

  attachDispatch(dispatch) {
    this.formDispatch = dispatch;
  }

  render() {
    const { pizzas } = this.props;
    return (
      <>
        <Form>
          <Form.Group grouped>
            <Form.Radio
              label="All"
              value="all"
              checked={this.state.value === "all"}
              onChange={this.handleChange}
            />
            {pizzas.map(pizza => (
              <Form.Radio
                label={pizza.name}
                value={pizza._id}
                key={pizza._id}
                checked={this.state.value === pizza._id}
                onChange={this.handleChange}
              />
            ))}
          </Form.Group>
        </Form>
      </>
    );
  }
}

ToppingsFilter.propTypes = {
  pizzas: array,
  toppings: array,
  fetchToppingsByPizza: func,
  fetchToppings: func,
  fetchPizzas: func
};

export default ToppingsFilter;
