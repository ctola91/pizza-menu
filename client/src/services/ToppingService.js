import API from '../api/api';

const URL_PIZZAS = '/pizzas';
const URL_TOPPINGS = '/toppings';

const getToppings = async () => {
  const response = await API.get(`${URL_TOPPINGS}`);
  if (response.error) {
    throw new Error('an error occurred');
  }
  return response;
};

const addTopping = async topping => {
  const response = await API.post(`${URL_TOPPINGS}`, topping);
  if (response.error) {
    throw new Error('occurred while is creating');
  }
  return response;
};

const getTopping = async id => {
  const response = await API.get(`${URL_TOPPINGS}/${id}`);
  if (response.error) {
    throw new Error('an error occurred');
  }
  return response;
};

const deleteTopping = async id => {
  const response = await API.delete(`${URL_TOPPINGS}/${id}`);
  if (response.error) {
    throw new Error('an error occurred while is deleting');
  }
  return response;
};

const updateTopping = async topping => {
  const response = await API.put(`${URL_TOPPINGS}/${topping._id}`, topping);
  if (response.error) {
    throw new Error('an error occurred while is updating');
  }
  return response;
};

const fetchToppingsByPizza = async pizzaId => {
  const response = await API.get(`${URL_PIZZAS}/${pizzaId}${URL_TOPPINGS}`);
  if (response.error) {
    throw new Error('an error occurred');
  }
  return response;
};

export default {
  getTopping,
  getToppings,
  addTopping,
  deleteTopping,
  updateTopping,
  fetchToppingsByPizza,
};
