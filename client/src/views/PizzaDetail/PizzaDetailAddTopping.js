import React, { Component } from "react";
import { Select, Button } from "semantic-ui-react";
import { Form, Control, Errors } from "react-redux-form";

class PizzaDetailAddTopping extends Component {
  constructor() {
    super();
    this.state = {
      filteredToppings: []
    };
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps &&
      prevProps.toppings &&
      prevProps.toppings.length != this.props.toppings.length
    )
      this.filterToppings();
  }

  handleSubmit = values => {
    const { pizza, addToppingToPizza, resetAddToppingToPizzaForm } = this.props;
    addToppingToPizza(pizza._id, values.topping);
    resetAddToppingToPizzaForm();
    this.filterToppings();
  };

  attachDispatch(dispatch) {
    this.formDispatch = dispatch;
  }

  filterToppings = () => {
    const { toppings, pizza } = this.props;
    let filtered = toppings.filter(topping => {
      return pizza.toppings.some(t => {
        return t._id === topping._id;
      });
    });
    this.setState(() => ({
      filteredToppings: filtered
    }));
  };

  render() {
    return (
      <>
        <Form
          className="ui form"
          model="addToppingToPizzaForm"
          onSubmit={values => this.handleSubmit(values)}
          getDispatch={dispatch => this.attachDispatch(dispatch)}
        >
          <div className="field">
            <Control.select model=".topping">
              <option value={"0"} disabled>
                Select a Topping
              </option>
              {this.state.filteredToppings.map(topping => (
                <option value={topping._id} key={topping._id}>
                  {topping.name}
                </option>
              ))}
            </Control.select>
          </div>
          <Errors
            model=".name"
            show="touched"
            messages={{
              required: "Required"
            }}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </>
    );
  }
}
export default PizzaDetailAddTopping;
