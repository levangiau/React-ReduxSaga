import * as modalTypes from "../constant/modal";

const initialState = {
  showModal: false,
  components:null,
  title:'',
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalTypes.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case modalTypes.HIDDEN_MODAL:
      return {
        ...state,
        showModal: false,
        title:'',
        components:null
      };
    case modalTypes.CHANGE_MODAL_TITLE:
      return{
        ...state,
        title:action.payload.title
      }
    case modalTypes.CHANGE_MODAL_CONTENT:
      return{
        ...state,
        components:action.payload.component
      }
    default:
      return state;
  }
};

export default modalReducer;
