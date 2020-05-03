import axiosService from '../commons/axiosServices';
import { API_ENDPOINT } from '../constants';

const url = 'tasks';

export const getList = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
};