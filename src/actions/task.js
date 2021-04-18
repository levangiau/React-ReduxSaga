import * as Types from "./../constant/task";

export const fetchListTask = () => {
  return {
    type: Types.FETCH_TASK,
  };
};

export const fetchListTaskSuccess = (data) => {
  return {
    type: Types.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListTaskFailed = (err) => {
  return {
    type: Types.FETCH_TASK_FAILED,
    payload: {
      err,
    },
  };
};
/**
 * b1: fetchlisttask
 * b2: reset state:Task về []
 * b3: nếu fetchlisttask thành công thì gọi fetchlisttasksuccess và trả về data
 * nếu fetchlisttask không thành công thì gọi fetchlisttaskfaild và trả vể err
 * @returns
 */

// export const fetchListTaskRequest = () => {
//   return (dispatch) => {
//     dispatch(fetchListTask());
//     return taskApi
//       .getList()
//       .then((res) => {
//         // console.log(res);
//         dispatch(fetchListTaskSuccess(res.data));
//       })
//       .catch((err) => {
//         // console.log(err);
//         dispatch(fetchListTaskFailed(err));
//       });
//   };
// };
