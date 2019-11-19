import { createForms } from "react-redux-form";

const initialForm = {
  name: ""
};
export default function formsReducer() {
  return createForms({
    pizzaForm: initialForm,
    toppingForm: initialForm
  });
}
