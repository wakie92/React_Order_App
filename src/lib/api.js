import api from 'axios-order';
import firebase from 'firebase';

export const getMenuList = () => api.get(`menu.json`);
export const postOrderedMenu = (orderSummary) => api.post(`orderSummary.json`,orderSummary);
export const putCounterUp = (id,count) => firebase.database().ref().child('menu/' + id).update({
  count : count
})
export const getUserId = (user) =>  api.get(`users/${user}.json`)
export const getOrderHistory = (user) => firebase.database().ref().child('users').child(user).on('child_added', snap => {
  let userRef = firebase.database().ref().child('orderSummary').orderByChild('os_userId').equalTo(snap.val());
  userRef.once('value').then(userSnap => {
    console.log(userSnap.key);
    let userMenu =  Object.assign(userSnap.val())
    console.log(userMenu);
    console.log(userSnap.val());
  })
  console.log(snap.val());
})
// export const getOrderHistory = (user) => firebase.database().ref().child('orderSummary').orderByChild('userId').equalTo(user).once('value').then((data) =>  { 
//                                                                                                   const  result =   data.val();
//                                                                                                   return  result
//                                                                                                 })