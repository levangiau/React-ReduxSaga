import * as uiTypes from "../constant/ui";

export const showLoading = () => ({
  type: uiTypes.GLOBAL_SHOW_LOADING,
});

export const hiddenLoading = () => ({
  type: uiTypes.GLOBAL_HIDDEN_LOADING,
});
