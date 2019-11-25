import { request, received, error } from "../shared/redux/baseActions";
import {
  FETCH_TOPPINGS_REQUEST,
  FETCH_TOPPINGS_SUCCESS,
  FETCH_TOPPINGS_ERROR,
  ADD_TOPPING_REQUEST,
  ADD_TOPPING_SUCCESS,
  ADD_TOPPING_ERROR,
  FETCH_TOPPING_REQUEST,
  FETCH_TOPPING_SUCCESS,
  FETCH_TOPPING_ERROR,
  UPDATE_TOPPING_REQUEST,
  UPDATE_TOPPING_SUCCESS,
  UPDATE_TOPPING_ERROR,
  DELETE_TOPPING_SUCCESS,
  DELETE_TOPPING_REQUEST,
  DELETE_TOPPING_ERROR,
  FETCH_TOPPINGS_BY_PIZZA_ERROR,
  FETCH_TOPPINGS_BY_PIZZA_REQUEST,
  FETCH_TOPPINGS_BY_PIZZA_SUCCESS,
} from "./actionTypes";
import ToppingService from "../services/ToppingService";
import { actions } from "react-redux-form";

export const fetchToppings = () => async dispatch => {
  dispatch(request(FETCH_TOPPINGS_REQUEST));
  try {
    const response = await ToppingService.getToppings();
    dispatch(received(FETCH_TOPPINGS_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(FETCH_TOPPINGS_ERROR));
    // eslint-disable-next-line
    console.log("AXIOS_ERROR", err.response);
  }
};

export const addTopping = topping => async dispatch => {
  dispatch(request(ADD_TOPPING_REQUEST));
  try {
    const response = await ToppingService.addTopping(topping);
    dispatch(received(ADD_TOPPING_SUCCESS, response.data));
  } catch (err) {
    dispatch(request(ADD_TOPPING_ERROR));
    // eslint-disable-next-line
    console.log("AXIOS_ERROR:", err.response);
  }
};

export const fetchTopping = id => async dispatch => {
  dispatch(request(FETCH_TOPPING_REQUEST));
  try {
    const response = await ToppingService.getTopping(id);
    dispatch(received(FETCH_TOPPING_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(FETCH_TOPPING_ERROR));
    // eslint-disable-next-line
    console.log("AXIOS_ERROR:", err.response);
  }
};

export const updateTopping = topping => async dispatch => {
  dispatch(request(UPDATE_TOPPING_REQUEST));
  try {
    const response = await ToppingService.updateTopping(topping);
    dispatch(received(UPDATE_TOPPING_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(UPDATE_TOPPING_ERROR));
    // eslint-disable-next-line
    console.log("AXIOS_ERROR:", err.response);
  }
};

export const deleteTopping = id => async dispatch => {
  dispatch(request(DELETE_TOPPING_REQUEST));
  try {
    const response = await ToppingService.deleteTopping(id);
    dispatch(received(DELETE_TOPPING_SUCCESS, id));
  } catch (err) {
    dispatch(error(DELETE_TOPPING_ERROR));
    // eslint-disable-next-line
    console.log("AXIOS_ERROR:", err.response);
  }
};

export const fetchToppingsByPizza = id => async dispatch => {
  dispatch(request(FETCH_TOPPINGS_BY_PIZZA_REQUEST));
  try {
    const response = await ToppingService.fetchToppingsByPizza(id);
    dispatch(received(FETCH_TOPPINGS_BY_PIZZA_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(FETCH_TOPPINGS_BY_PIZZA_ERROR));
    console.log("AXIOS_ERROR", err.response);
  }
};

export const resetToppingForm = () => dispatch => {
  dispatch(actions.reset("toppingForm"));
};

export const resetAddToppingToPizzaForm = () => dispatch => {
  dispatch(actions.reset("addToppingToPizzaForm"));
};
