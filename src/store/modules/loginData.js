import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const ISLOGINED  = 'loginData/ISLOGINED';
const CHANGE_LOGIN_INFO = 'loginData/CHANGE_LOGIN_INFO';
const GET_USER_ID = 'loginData/GET_USER_ID';
const USER_ID = 'loginData/USER_ID';
export const isLogined = createAction(ISLOGINED);
export const changeLoginInfo = createAction(CHANGE_LOGIN_INFO);
export const getUserId = createAction(GET_USER_ID, api.getUserId);
export const userId = createAction(USER_ID);
const initialState = fromJS({
  isLogined : false,
  loginUser : {
    id : '',
    password : ''
  }
})

export default handleActions({
  ...pender({
    type : GET_USER_ID,
    onSuccess : (state, action) => {
      const loginId  = action.payload.data;
      const user = {...loginId}
    }
  }),
  [ISLOGINED] : (state, action) => {
    const isLogined = action.payload;
    return state.set('isLogined', isLogined);
  },
  [USER_ID] : (state, action) => {
    const id = action.payload;
    return state.setIn(['loginUser', 'id'], id)
  }
}, initialState)