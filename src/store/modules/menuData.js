import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const GET_MENU_LIST = 'menuData/GET_MENU_LIST';

export const getMenuList = createAction(GET_MENU_LIST,api.getMenuList);
const initialState = fromJS({
  menu : [],
})

export default handleActions({
  ...pender({
    type : GET_MENU_LIST,
    onSuccess : (state, action) => {
      let menuData = action.payload.data;
      menuData.map((item) => {
        return {...item, ...item.counter = 0}
      })
      return state.set('menu', menuData);
    }
  }),
},initialState)