import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = () => {
  const midleweares = [thunk];

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...midleweares))
  );
  return store;
};
export default configureStore;
