// import * as Types from "./../constant/task";
import * as taskApi from "./../apis/task";

export const fetchListTask = () => {
  return (dispatch) => {
    return taskApi
      .getList()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
