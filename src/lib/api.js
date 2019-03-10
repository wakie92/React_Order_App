import api from 'axios-order';

export const getMenuList = () => api.get(`menu.json`);
export const postOrderedMenu = (orderSummary) => api.post(`orderSummary.json`,orderSummary);
export const putCounterUp = (id,count) => api.post(`menu.json/${id}`,count)
// export const getUserId = (loginId) =>  api.get(`users/${loginId}`)
export const getUserId = (user) =>  api.get(`users/${user}.json`)