import { combineReducers } from 'redux';
import pizza from '../../reducers/pizzaReducer';
import topping from '../../reducers/toppingReducer';
import formsReducer from '../../reducers/formsReducer';

const rootReducer = combineReducers({
  pizza,
  topping,
  ...formsReducer()
});

export default rootReducer;
