import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const ISLOGINED  = 'loginData/ISLOGINED';
const CHANGE_LOGIN_INFO = 'loginData/CHANGE_LOGIN_INFO';
const GET_USER_ID = 'loginData/GET_USER_ID';
const USER_ID = 'loginData/USER_ID';
const UNLOGIN_USER = 'loginData/UNLOGIN_USER';
const LOGOUT = 'loginData/LOGOUT';
const CHECK_LOGIN = 'loginData/CHECK_LOGIN'

export const isLogined = createAction(ISLOGINED);
export const changeLoginInfo = createAction(CHANGE_LOGIN_INFO);
export const getUserId = createAction(GET_USER_ID);
export const userId = createAction(USER_ID);
export const getUnLoginUser = createAction(UNLOGIN_USER);
export const logOut = createAction(LOGOUT);
export const checkLogin = createAction(CHECK_LOGIN);

const initialState = fromJS({
  isLogined : false,
  loginUser : {
    token: null,
    userId: null,
    error: null,
    loading: false
  },
  unLoginUser: null
})

export default handleActions({
  [GET_USER_ID] :(state, action) => {
    const { idToken, email ,expiresIn, localId}  = action.payload;
    console.log(action.payload)
    let isLogined = localStorage.getItem('emailId') === null ? true : false;
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
          localStorage.setItem('token', idToken);
          localStorage.setItem('expirationDate', expirationDate);
          localStorage.setItem('userId', localId);
          localStorage.setItem('emailId',email);
          console.log(email);
    return state.setIn(['loginUser', 'userId'], email)
                .setIn(['loginUser', 'token'], idToken)
                .setIn(['loginUser', 'error'], null)
                .setIn(['loginUser', 'loading'], false)
                .set('isLogined', isLogined)
  },
  [ISLOGINED] : (state, action) => {
    const isLogined = action.payload;
    return state.set('isLogined', isLogined)
  },
  [LOGOUT] :  (state, action) => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    localStorage.removeItem('emailId');
    return state.setIn(['loginUser', 'userId'], null)
                .setIn(['loginUser','token'], null)
                .set('isLogined', false)
  },
  [UNLOGIN_USER] : (state, action) => {
    let key = '';
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    console.log('sdfsdf');
    for( var i=0; i < 5; i++ )
        key += possible.charAt(Math.floor(Math.random() * possible.length));
    return state.set('unLoginUser',key);
  },
  [CHECK_LOGIN] : (state, action) => {
    const { idToken, userId ,isLogined}  = action.payload;
    console.log(action.payload);
    return state.setIn(['loginUser', 'userId'], userId)
                .setIn(['loginUser', 'token'], idToken)
                .setIn(['loginUser', 'error'], null)
                .setIn(['loginUser', 'loading'], false)
                .set('isLogined', isLogined)
  }

}, initialState)