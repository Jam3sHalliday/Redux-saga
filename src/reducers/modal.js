import * as types from '../constants/modal';

const initialState = {
    showModal: false,
    title: '',
    component: null,
};

const reducer = ( state = initialState, action ) => {
    switch(action.types) {
        case types.SHOW_MODAL: {
            return {
                ...state,
                showModal: true
            }
        }
        case types.HIDE_MODAL: {
            return {
                ...state,
                showModal: false
            }
        }
        case types.CHANGE_MODAL_CONTENT: {
            const { title } = action.payload;
            return {
                ...state,
                title,
            }
        }
        case types.CHANGE_MODAL_TITLE: {
            const { component } = action.payload;

            return {
                ...state,
                component,
            }
        }


        default:
            return state;
    }
}

export default reducer;