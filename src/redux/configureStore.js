import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import myRootSaga from "../sagas";


const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const midleweares = [thunk, sagaMiddleware]; // mức độ ưu tiên phụ thuộc vào vị trí đứng của các middleware
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...midleweares))
  );
  sagaMiddleware.run(myRootSaga); // theo dõi các action từ saga
  return store;
};

export default configureStore;
