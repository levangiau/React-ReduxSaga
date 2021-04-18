import * as uiTypes from "../constant/ui";

const initialState = {
  showLoading: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case uiTypes.GLOBAL_SHOW_LOADING:
      return {
        ...state,
        showLoading: true,
      };
    case uiTypes.GLOBAL_HIDDEN_LOADING:
      return {
        ...state,
        showLoading: false,
      };
    default:
      return state;
  }
};

export default uiReducer;
