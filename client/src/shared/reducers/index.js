import { combineReducers } from 'redux';
import pizza from '../../reducers/pizzaReducer';

const rootReducer = combineReducers({
  pizza
});

export default rootReducer;
