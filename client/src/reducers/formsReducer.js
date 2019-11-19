import { createForms } from "react-redux-form";

const initialPizzaForm = {
  name: ""
};
export default function formsReducer() {
  return createForms({
    pizzaForm: initialPizzaForm
  });
}
