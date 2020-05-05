import * as types from '../constants/modal';

export const showModal = () => ({
    type: types.SHOW_MODAL,
});

export const hideModal = () => ({
    type: types.HIDE_MODAL,
});

export const changeModalContent = title => ({
    type: types.CHANGE_MODAL_CONTENT,
    payload: { title }
});

export const changeModalTitle = component => ({
    type: types.CHANGE_MODAL_TITLE,
    payload: { component }
});