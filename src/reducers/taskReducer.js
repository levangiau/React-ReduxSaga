// import * as action from '../actions/task';
import * as Types from "../constant/task";
import { toastErr } from "../helpers/toastHelper";
const initialState = {
  listTask: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_TASK:
      return {
        ...state,
        listTask: [],
      };
    case Types.FETCH_TASK_SUCCESS:
      return {
        ...state,
        listTask: action.payload.data,
      };
    case Types.FETCH_TASK_FAILED:
      const { err } = action.payload;
      toastErr(err);
      return {
        ...state,
        listTask: [],
      };

    case Types.FILTER_TASK_SUCCESS:
      const {data} = action.payload;
      console.log("data",data)
      return{
        ...state,
        listTask:data,
      }
    default:
      return state;
  }
};
export default taskReducer;
