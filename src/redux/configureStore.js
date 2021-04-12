import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = () => {
  const midleweares = [];

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...midleweares))
  );
  return store;
};
export default configureStore;
