import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const GET_MENU_LIST = 'menuData/GET_MENU_LIST';
const GET_COUNTER = 'menuData/GET_COUNTER';

export const getMenuList = createAction(GET_MENU_LIST,api.getMenuList);
export const getCounter = createAction(GET_COUNTER)

const initialState = fromJS({
  menu : [],
  counter : 0
})

export default handleActions({
  ...pender({
    type : GET_MENU_LIST,
    onFailure : (state, action) => {
      console.log('fail')
    },
    onSuccess : (state, action) => {
      console.log(action.payload);
      const menuData = action.payload.data;
      console.log(menuData.data);
      return state.set('menu', menuData);
    }
  }),
  // [GET_MENU_LIST] : (state, action) => {
  //   console.log(action.payload);
  //   const menuData = action.payload.data;
  //   return state.set('menu',menuData);
  // },
  [GET_COUNTER] : (state,action) => {
    const { name , value} = action.payload
    console.log(action.payload);
    return state.set(name,value );
  }
},initialState)