import { combineReducers } from "redux";
import task from "./taskReducer";
import ui from "./uiReducer";
import modal from "./modalReducer";
const rootReducer = combineReducers({
  task,
  ui,
  modal,
});
export default rootReducer;
