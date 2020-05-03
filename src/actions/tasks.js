import * as taskApis from '../apis/task';
import * as taskConstants from '../constants/task';

export const fetchListTask = () => {
    return {
        type: taskConstants.FETCH_TASK,
    };
};
export const fetchListTaskSuccess = data => {
    return {
        type: taskConstants.FETCH_TASK_SUCCESS,
        payload: {
            data
        }
    };
};
export const fetchListTaskFailed = error => {
    return {
        type: taskConstants.FETCH_TASK_FAILED,
        payload: {
            error
        }
    };
};

/*
    b1: fetchListTaskRequest()
    b2: reset: state.tasks => []
    b3: fetchListTaskSuccess(dataResponse)
*/


// export const fetchListTaskRequest = () => {
//     return dispatch => {
//         dispatch(fetchListTask())
//         taskApis
//             .getList()
//             .then( res => {
//                 const { data } = res;
//                 dispatch(fetchListTaskSuccess(data));
//             }).catch(err => {
//                 dispatch(fetchListTaskFailed(err));
//             });
//     };
// };