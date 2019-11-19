import {
  FETCH_PIZZAS_SUCCESS,
  ADD_PIZZA_SUCCESS,
  DELETE_PIZZA_SUCCESS,
  UPDATE_PIZZA_SUCCESS,
} from '../actions/actionTypes';
import { getNewState } from '../shared/utils/frontend';

const initialState = {
  pizzas: [],
};

export default function pizzaReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PIZZAS_SUCCESS: {
      const { payload: pizzas } = action;
      return getNewState(state, {
        pizzas,
      });
    }
    case ADD_PIZZA_SUCCESS: {
      const { payload: pizza } = action;
      const newPizzas = [...state.pizzas, pizza];
      return getNewState(state, {
        pizzas: newPizzas,
      });
    }
    case DELETE_PIZZA_SUCCESS: {
      const { payload: id } = action;
      const filteredPizzas = state.pizzas.filter(pizza => pizza._id !== id);
      return getNewState(state, {
        pizzas: filteredPizzas,
      });
    }
    case UPDATE_PIZZA_SUCCESS: {
      const { payload: updatedPizza } = action;
      const index = state.pizza.findIndex(
        pizza => pizza.id === updatedPizza.id
      );
      state.pizzas[index] = updatedPizza;
      return getNewState(state, {
        pizzas: state.pizzas,
      });
    }
    default:
      return state;
  }
}
