import { fork, take, call, put, delay } from 'redux-saga/effects';
import * as taskType from '../constants/task';
import { getList } from '../apis/task';
import { STATUS_CODE } from '../constants'
import { fetchListTaskSuccess, fetchListTaskFailed } from '../actions/tasks';
import { showLoading, hideLoading } from '../actions/ui';

/** 
 * b1: thuc thi action fetch task
 * b2: call api
 * b3: check status code
 *  if done =>
 *  if failed =>
 * b4: off loading
 * b5: next work()
*/


function* watchFetchListTaskAction() {
    while(true) {
        yield take(taskType.FETCH_TASK);
        // show Loading gif
        yield put(showLoading())
        const res = yield call(getList);
        const { status, data } = res;
        if(status === STATUS_CODE.SUCCESS){
            // dispatch action fetchListTaskSuccess
            yield put(fetchListTaskSuccess(data))
        } else {
            // fetchListTaskFailed
            yield put(fetchListTaskFailed(data))
        }
        yield delay(800);
        yield put(hideLoading());
    }
}

function* watchCreateTaskAction() {
    console.log('watching create task action');

}

function* rootSaga() {
    yield fork(watchFetchListTaskAction);
    yield fork(watchCreateTaskAction);
}

export default rootSaga;