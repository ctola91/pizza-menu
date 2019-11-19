import React, { Component } from 'react';
import { Form, Control, Errors } from 'react-redux-form';
import { Button } from 'semantic-ui-react';
import { func } from 'prop-types';

const required = val => val && val.length;

class PizzaForm extends Component {
  handleSubmit = values => {
    this.handleAddNewPizza(values);
  };

  handleAddNewPizza = values => {
    const { addPizza } = this.props;
    if (values.name) {
      addPizza({
        name: values.name,
      });
    }
    this.props.resetPizzaForm();
  };

  attachDispatch(dispatch) {
    this.formDispatch = dispatch;
  }

  render() {
    return (
      <>
        <Form
          className="ui form"
          model="pizzaForm"
          onSubmit={values => this.handleSubmit(values)}
          getDispatch={dispatch => this.attachDispatch(dispatch)}
        >
          <div className="field">
            <label htmlFor="name">
              Pizza Name
              <Control.text
                model=".name"
                id="name"
                name="pizzaName"
                placeholder="Pizza Name"
                validators={{
                  required,
                }}
              />
            </label>
          </div>
          <Errors
            model=".name"
            show="touched"
            messages={{
              required: 'Required',
            }}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </>
    );
  }
}

PizzaForm.propTypes = {
  addPizza: func,
  resetPizzaForm: func,
};

export default PizzaForm;
