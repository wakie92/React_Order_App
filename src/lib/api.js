import api from 'axios-order';
import firebase from 'firebase';
export const getMenuList = () => api.get(`menu.json`);
export const postOrderedMenu = (orderSummary) => api.post(`orderSummary.json`,orderSummary);
export const putCounterUp = (id,count) => firebase.database().ref().child('menu/' + id).update({
  count : count
})