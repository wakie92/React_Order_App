import api from 'axios-order';
import firebase from 'firebase';

export const getMenuList = () => api.get(`menu.json`);
export const postOrderedMenu = (orderSummary) => api.post(`orderSummary.json`,orderSummary);
export const putCounterUp = (id,count) => firebase.database().ref().child('menu/' + id).update({
  count : count
})
export const getUserId = (user) =>  api.get(`users/${user}.json`)
// export const getOrderHistory = (user) => firebase.database().ref().child('users').child(user).on('child_added', snap => {
//   let userRef = firebase.database().ref().child('orderSummary').orderByChild('os_userId').equalTo(snap.val());
//   userRef.once('value').then(userSnap => {
    
//   })
// })
export const getOrderHistory = (user) => firebase.database().ref().child('orderSummary')
.orderByChild('os_userId').equalTo(user)
.once('value').then((data) => { 
                                 let userMenu = [];
                                 for (var a in data.val()){
                                   userMenu.push(data.val()[a]);
                                 }
                                 return userMenu;       
                              })