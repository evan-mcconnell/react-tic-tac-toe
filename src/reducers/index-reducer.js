import historyReducer from './history-reducer';
import stepReducer from './step-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  stepNumber: stepReducer,
  history: historyReducer
});

export default rootReducer;
