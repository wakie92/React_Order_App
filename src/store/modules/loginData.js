import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const ISLOGINED  = 'loginData/ISLOGINED';
const CHANGE_LOGIN_INFO = 'loginData/CHANGE_LOGIN_INFO';
const GET_USER_ID = 'loginData/GET_USER_ID';
export const isLogined = createAction(ISLOGINED);
export const changeLoginInfo = createAction(CHANGE_LOGIN_INFO);
export const getUserId = createAction(GET_USER_ID, api.getUserId);
const initialState = fromJS({
  isLogined : false,
  loginPage : {
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
      console.log(action.payload)
      console.log(user)
    }
  }),
  [ISLOGINED] : (state, action) => {
    const isLogined = action.payload;
    return state.set('isLogined', isLogined);
  },
  [CHANGE_LOGIN_INFO] : (state, action) => {
    const {name, value} = action.payload;
    return state.setIn(['loginPage', name], value)
  }
}, initialState)