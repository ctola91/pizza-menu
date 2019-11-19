import {
  FETCH_TOPPINGS_SUCCESS,
  ADD_TOPPING_SUCCESS,
  DELETE_TOPPING_SUCCESS,
  UPDATE_TOPPING_SUCCESS,
  ADD_TOPPING_BY_PIZZA_SUCCESS,
  FETCH_TOPPINGS_BY_PIZZA_SUCCESS
} from "../actions/actionTypes";
import { getNewState } from "../shared/utils/frontend";

const initialState = {
  toppings: []
};

export default function toppingReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOPPINGS_SUCCESS: {
      const { payload: toppings } = action;
      return getNewState(state, {
        toppings
      });
    }
    case ADD_TOPPING_SUCCESS: {
      const { payload: topping } = action;
      const newToppings = [...state.toppings, topping];
      return getNewState(state, {
        toppings: newToppings
      });
    }
    case DELETE_TOPPING_SUCCESS: {
      const { payload: id } = action;
      const filteredToppings = state.toppings.filter(topping => topping._id !== id);
      return getNewState(state, {
        toppings: filteredToppings
      });
    }
    case UPDATE_TOPPING_SUCCESS: {
      const { payload: updatedTopping } = action;
      const index = state.toppings.findIndex(
        topping => topping._id === updatedTopping._id
      );
      const filteredToppings = state.toppings.filter(
        topping => topping._id !== updatedTopping._id
      );
      filteredToppings.splice(index, 0, updatedTopping);
      return getNewState(state, {
        toppings: filteredToppings
      });
    }
    case FETCH_TOPPINGS_BY_PIZZA_SUCCESS: {
      const { payload: toppings } = action;
      return getNewState(state, {
        toppings,
      });
    }
    case ADD_TOPPING_BY_PIZZA_SUCCESS: {
      const { payload: topping } = action;
      const newToppings = [...state.toppings, topping];
      return getNewState(state, {
        toppings: newToppings,
      });
    }
    default:
      return state;
  }
}
