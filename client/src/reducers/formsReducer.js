import { createForms } from "react-redux-form";

const initialForm = {
  name: "",
};

const initialAddToppingForm = {
  topping: '0'
}

export default function formsReducer() {
  return createForms({
    pizzaForm: initialForm,
    toppingForm: initialForm,
    addToppingToPizzaForm: initialAddToppingForm
  });
}
