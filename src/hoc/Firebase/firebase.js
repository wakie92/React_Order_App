import app from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'
const config = {
  apiKey: "AIzaSyAVbIamQ34eNUx7XuoQvKq8CSfXJku30qU",
  authDomain: "order-app-7e078.firebaseapp.com",
  databaseURL: "https://order-app-7e078.firebaseio.com",
  projectId: "order-app-7e078",
};

class Firebase {
    constructor () {
      app.initializeApp(config);
      this.db = app.database();
    }

    //User API
    menu =  () => this.db.ref() 
          .child('menu')
          .child('1')
          .once('value',  (data)  => {
            console.log( data.val());
          }).then(  (data) =>  { 
            const  result =   data.val();
            console.log('s')
            return  result
          })

    orderHistory = () => this.db.ref().child('orderSummary').child('os_purchasingMenu').orderByKey('os_userId').equalTo().once('value').then((data) =>  { 
      const  result =   data.val();
      return  result
    })

    joinTest = () => this.db.ref().child('users').once('child_added', snap => {
      console.log(snap.val());
    })
    menu1 = () => this.db.ref('menu');
}
export default Firebase;