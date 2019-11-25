import { request, received, error } from "../shared/redux/baseActions";
import {
  FETCH_PIZZAS_REQUEST,
  FETCH_PIZZAS_SUCCESS,
  FETCH_PIZZAS_ERROR,
  ADD_PIZZA_REQUEST,
  ADD_PIZZA_SUCCESS,
  ADD_PIZZA_ERROR,
  FETCH_PIZZA_REQUEST,
  FETCH_PIZZA_SUCCESS,
  FETCH_PIZZA_ERROR,
  UPDATE_PIZZA_REQUEST,
  UPDATE_PIZZA_SUCCESS,
  UPDATE_PIZZA_ERROR,
  DELETE_PIZZA_SUCCESS,
  DELETE_PIZZA_REQUEST,
  DELETE_PIZZA_ERROR,
  ADD_TOPPING_TO_PIZZA_REQUEST,
  ADD_TOPPING_TO_PIZZA_SUCCESS,
  ADD_TOPPING_TO_PIZZA_ERROR,
  DELETE_TOPPING_FROM_PIZZA_REQUEST,
  DELETE_TOPPING_FROM_PIZZA_SUCCESS,
  DELETE_TOPPING_FROM_PIZZA_ERROR
} from "./actionTypes";
import PizzaService from "../services/PizzaService";
import { actions } from "react-redux-form";

export const fetchPizzas = (limit, page) => async dispatch => {
  dispatch(request(FETCH_PIZZAS_REQUEST));
  try {
    const response = await PizzaService.getPizzas(limit, page);
    dispatch(received(FETCH_PIZZAS_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(FETCH_PIZZAS_ERROR));
    // eslint-disable-next-line
    console.log("AXIOS_ERROR", err.response);
  }
};

export const addPizza = pizza => async dispatch => {
  dispatch(request(ADD_PIZZA_REQUEST));
  try {
    const response = await PizzaService.addPizza(pizza);
    dispatch(received(ADD_PIZZA_SUCCESS, response.data));
  } catch (err) {
    dispatch(request(ADD_PIZZA_ERROR));
    // eslint-disable-next-line
    console.log("AXIOS_ERROR:", err.response);
  }
};

export const fetchPizza = id => async dispatch => {
  dispatch(request(FETCH_PIZZA_REQUEST));
  try {
    const response = await PizzaService.getPizza(id);
    dispatch(received(FETCH_PIZZA_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(FETCH_PIZZA_ERROR));
    // eslint-disable-next-line
    console.log("AXIOS_ERROR:", err.response);
  }
};

export const updatePizza = pizza => async dispatch => {
  dispatch(request(UPDATE_PIZZA_REQUEST));
  try {
    const response = await PizzaService.updatePizza(pizza);
    dispatch(received(UPDATE_PIZZA_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(UPDATE_PIZZA_ERROR));
    // eslint-disable-next-line
    console.log("AXIOS_ERROR:", err.response);
  }
};

export const deletePizza = id => async dispatch => {
  dispatch(request(DELETE_PIZZA_REQUEST));
  try {
    const response = await PizzaService.deletePizza(id);
    dispatch(received(DELETE_PIZZA_SUCCESS, id));
  } catch (err) {
    dispatch(error(DELETE_PIZZA_ERROR));
    // eslint-disable-next-line
    console.log("AXIOS_ERROR:", err.response);
  }
};

export const addToppingToPizza = (pizzaId, toppingId) => async dispatch => {
  dispatch(request(ADD_TOPPING_TO_PIZZA_REQUEST));
  try {
    const response = await PizzaService.addToppingToPizza(pizzaId, toppingId);
    dispatch(received(ADD_TOPPING_TO_PIZZA_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(ADD_TOPPING_TO_PIZZA_ERROR));
    // eslint-disable-next-line
    console.log("AXIOS_ERROR:", err.response);
  }
};

export const deleteToppingFromPizza = (pizzaId, toppingId) => async dispatch => {
  dispatch(request(DELETE_TOPPING_FROM_PIZZA_REQUEST));
  try {
    const response = await PizzaService.deleteToppingFromPizza(pizzaId, toppingId);
    dispatch(received(DELETE_TOPPING_FROM_PIZZA_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(DELETE_TOPPING_FROM_PIZZA_ERROR));
    // eslint-disable-next-line
    console.log("AXIOS_ERROR:", err.response);
  }
};

export const resetPizzaForm = () => dispatch => {
  dispatch(actions.reset("pizzaForm"));
};
