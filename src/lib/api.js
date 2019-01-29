import api from 'axios-order';

export const getMenuList = () => api.get(`menu.json`);
