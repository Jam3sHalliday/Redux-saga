import { fork, take, call, put, delay, takeLatest, select } from 'redux-saga/effects';
import * as taskType from '../constants/task';
import { getList } from '../apis/task';
import { STATUS_CODE } from '../constants'
import { fetchListTaskSuccess, fetchListTaskFailed, filterTaskSuccess } from '../actions/tasks';
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

function* filterTaskSaga({payload}) {
    yield delay(500);
    const { keyword } = payload;
    const list = yield select(state => state.task.listTask)
    const filterTask = list.filter(task => 
        task.title
            .trim()
            .toLowerCase()
            .includes(
                keyword
                    .trim()
                    .toLowerCase()
            )
    );
    yield put(filterTaskSuccess(filterTask));
}

function* rootSaga() {
    yield fork(watchFetchListTaskAction);
    yield takeLatest(taskType.FILTER_TASK, filterTaskSaga)
}

export default rootSaga;