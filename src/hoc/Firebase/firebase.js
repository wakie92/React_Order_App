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
      this.auth = app.auth();
    }

    //Auth API
    docreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
    
    doSignInwithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password)
    
    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
    
    doOpenPopup = () => this.auth.signInWithPopup();

    

    //User API
    menu =  () => this.db.ref() 
          .child('menu')
          .child('1')
          .once('value',  (data)  => {
          }).then(  (data) =>  { 
            const  result =   data.val();
            return  result
          })

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
                            })
    menu1 = () => this.db.ref('menu');
}
export default Firebase;