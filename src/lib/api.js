import api from 'axios-order';

export const getMenuList = () => api.get(`menu.json`);
export const postOrderedMenu = (orderSummary) => api.post(`orderSummary.json`,{orderSummary});