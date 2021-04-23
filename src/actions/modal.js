import * as modalTypes from "../constant/modal";

export const showModal = () => ({
  type: modalTypes.SHOW_MODAL,
});
export const hiddenModal = () => ({
  type: modalTypes.HIDDEN_MODAL,
});
export const changeModalContent = (component) => ({
  type: modalTypes.CHANGE_MODAL_CONTENT,
  payload:{
    component
  }
});
export const changModalTitle = (title) => ({
  type: modalTypes.CHANGE_MODAL_TITLE,
  payload:{
    title
  }
});


