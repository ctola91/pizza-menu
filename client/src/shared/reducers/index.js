import { combineReducers } from 'redux';
import pizza from '../../reducers/pizzaReducer';
import formsReducer from '../../reducers/formsReducer';

const rootReducer = combineReducers({
  pizza,
  ...formsReducer()
});

export default rootReducer;
