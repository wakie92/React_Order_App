import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const ISLOGINED  = 'loginData/ISLOGINED';
const CHANGE_LOGIN_INFO = 'loginData/CHANGE_LOGIN_INFO';
const GET_USER_ID = 'loginData/GET_USER_ID';
const USER_ID = 'loginData/USER_ID';
const UNLOGIN_USER = 'loginData/UNLOGIN_USER';
export const isLogined = createAction(ISLOGINED);
export const changeLoginInfo = createAction(CHANGE_LOGIN_INFO);
export const getUserId = createAction(GET_USER_ID);
export const userId = createAction(USER_ID);
export const getUnLoginUser = createAction(UNLOGIN_USER);
const initialState = fromJS({
  isLogined : false,
  loginUser : {
    token: null,
    userId: null,
    error: null,
    loading: false
  },
  
})

export default handleActions({
  [GET_USER_ID] :(state, action) => {
    const { idToken, email ,expiresIn, localId}  = action.payload;
    console.log(action.payload);
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
            localStorage.setItem('token', idToken);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', localId);
    return state.setIn(['loginUser', 'userId'], email)
                .setIn(['loginUser', 'token'], idToken)
                .setIn(['loginUser', 'error'], null)
                .setIn(['loginUser', 'loading'], false)
                .set('isLogined', true)
  },
  [ISLOGINED] : (state, action) => {
    const isLogined = action.payload;
    return state.set('isLogined', isLogined);
  },
  [USER_ID] : (state, action) => {
    const id = action.payload;
    return state.setIn(['loginUser', 'id'], id)
  },
  // [USER_ID] : (state, action) => {
  //   const id = action.payload;
  //   return state.setIn(['loginUser', 'id'], id)
  // },
  
  [UNLOGIN_USER] : (state, action) => {
    const id = action.payload;
    return state.setIn(['loginUser', 'id'],id);
  }
}, initialState)