import { fork, take, call, put, delay } from "redux-saga/effects";
import * as Types from "./../constant/task";
import { fetchListTaskSuccess, fetchListTaskFailed } from "./../actions/task";
import { getList } from "./../apis/task";
import { STATUS_CODE } from "./../constant";
import { showLoading, hiddenLoading } from "./../actions/ui";
/**
 * B1: thực thi action fetch task
 * B2: gọi api
 * B2.1: hiển thị thanh loading
 * B3: kiểm tra status code
 * Nếu thành công ...
 * Nếu thất bại ...
 * B3.1: tắt loading.
 * B4: thực thi các bước tiếp
 */

function* watchFetchListTaskAction() {
  // take nó chỉ lắng nghe 1 hành động 1 lần nên khi gọi lại nó sẽ không nhận được
  //=> cần có 1 vòng lập để cho nó biết để gọi nó => vòng lập vô tận được áp dụng
  while (true) {
    yield take(Types.FETCH_TASK);
    yield put(showLoading());
    //======= qua nay sẽ bị block====//
    console.log("watchFetchListTaskAction");
    const a = yield call(getList);
    //======= qua nay sẽ bị block nếu call chưa xong ====//
    const { status, data } = a;
    if (STATUS_CODE.SUCCESS === status) {
      //dispatch fectch listtask success
      yield put(fetchListTaskSuccess(data));
      yield delay(1000);
      yield put(hiddenLoading());
    } else {
      //dispatch fectch listtask failed
      yield put(fetchListTaskFailed(data));
      yield delay(1000);
      yield put(hiddenLoading());
    }
  }
}

function* watchCreateTask() {
  console.log("watchCreateTask");
}

function* rootSaga() {
  console.log("this is saga");
  //những hàm trong fork thì thực hiện song song gọi hàm nào trước cũng được gọ là non-blocking
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTask);
}

export default rootSaga;
