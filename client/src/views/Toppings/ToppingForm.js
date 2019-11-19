import React, { Component } from "react";
import { Form, Control, Errors } from "react-redux-form";
import { Button } from "semantic-ui-react";
import { func } from "prop-types";

const required = val => val && val.length;

class ToppingForm extends Component {
  handleSubmit = values => {
    this.handleAddNewTopping(values);
  };

  handleAddNewTopping = values => {
    console.log(values)
    const { addToppingByPizza } = this.props;
    if (values.name) {
      addToppingByPizza({
        name: values.name,
        pizza: values.pizza
      });
    }
    this.props.resetToppingForm();
  };

  attachDispatch(dispatch) {
    this.formDispatch = dispatch;
  }

  render() {
    const { pizzas } = this.props;
    return (
      <>
        <Form
          className="ui form"
          model="toppingForm"
          onSubmit={values => this.handleSubmit(values)}
          getDispatch={dispatch => this.attachDispatch(dispatch)}
        >
          <div className="field">
            <label htmlFor="name">
              Topping Name
              <Control.text
                model=".name"
                id="name"
                name="toppingName"
                placeholder="Topping Name"
                validators={{
                  required
                }}
              />
            </label>
            <Control.select
              model=".pizza"
              validators={{
                required
              }}
            >
              {pizzas.map(pizza => (
                <option value={pizza._id} key={pizza._id}>{pizza.name}</option>
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

ToppingForm.propTypes = {
  addToppingByPizza: func,
  resetToppingForm: func
};

export default ToppingForm;
