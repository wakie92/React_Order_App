import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const ISLOGINED  = 'loginData/ISLOGINED';
const CHANGE_LOGIN_INFO = 'loginData/CHANGE_LOGIN_INFO';
const GET_USER_ID = 'loginData/GET_USER_ID';
const USER_ID = 'loginData/USER_ID';
const UNLOGIN_USER = 'loginData/UNLOGIN_USER';

export const isLogined = createAction(ISLOGINED);
export const changeLoginInfo = createAction(CHANGE_LOGIN_INFO);
export const getUserId = createAction(GET_USER_ID, api.getUserId);
export const userId = createAction(USER_ID);
export const getUnLoginUser = createAction(UNLOGIN_USER);
const initialState = fromJS({
  isLogined : false,
  loginUser : {
    id : null,
    password : ''
  },
  
})

export default handleActions({
  ...pender({
    type : GET_USER_ID,
    onSuccess : (state, action) => {

    }
  }),
  [ISLOGINED] : (state, action) => {
    const isLogined = action.payload;
    return state.set('isLogined', isLogined);
  },
  [USER_ID] : (state, action) => {
    const id = action.payload;
    return state.setIn(['loginUser', 'id'], id)
  },
  [UNLOGIN_USER] : (state, action) => {
    const id = action.payload;
    return state.setIn(['loginUser', 'id'],id);
  }
}, initialState)