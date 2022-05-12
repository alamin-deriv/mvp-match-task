import { combineReducers } from "redux";
import reportsReducer from './reports/reducer';


const rootReducer = combineReducers({
  reports: reportsReducer,

});

export default rootReducer;
