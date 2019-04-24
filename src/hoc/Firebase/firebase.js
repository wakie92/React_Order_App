import app from 'firebase/app';
import 'firebase/database'
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
    orderHistory = (user) =>  this.db.ref()
                          .child('orderSummary')
                          .orderByChild('os_userId')
                          .equalTo(user)
                          .once('value')
                          .then((data) => { 
                              const  userMenu = [];
                              for (let item in data.val()){
                                userMenu.push(data.val()[item]);
                              }
                          return  userMenu;
    });

    postOrderedMenu = (orderSummary) => this.db.ref()
                                      .child('orderSummary')
                                      .update({orderSummary})
}
export default Firebase;