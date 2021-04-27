import { combineReducers } from "redux";
import task from "./taskReducer";
import ui from "./uiReducer";
import modal from "./modalReducer";
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  task,
  ui,
  modal,
  form: formReducer,
});
export default rootReducer;
