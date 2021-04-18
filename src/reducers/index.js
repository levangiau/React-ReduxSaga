import { combineReducers } from "redux";
import task from "./taskReducer";
import ui from "./uiReducer";

const rootReducer = combineReducers({
  task,
  ui,
});
export default rootReducer;
