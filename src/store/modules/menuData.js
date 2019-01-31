import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const GET_MENU_LIST = 'menuData/GET_MENU_LIST';
const CONTROLED_COUNT = 'menuData/CONTROLED_COUNT';
const ADD_ITEM = 'menuData/ADD_ITEM';
const SELECTED_MENU = 'menuData/SELECTED_MENU';
const TOTAL_PRICE = 'menuData/TOTAL_PRICE';
const CALC_PRICE = 'menuData/CALC_PRICE';
const SHOW_TF = 'menuData/SHOW_TF';
const CHECKED_TF = 'menuData/CHECKED_TF';
const REQUIREMENT = 'menuData/REQUIREMENT';
const ORDERSUMMARY = 'menuData/ORDERSUMMARY';

export const getMenuList = createAction(GET_MENU_LIST,api.getMenuList);
export const controledCount = createAction(CONTROLED_COUNT);
export const addItem = createAction(ADD_ITEM);
export const selectedMenu = createAction(SELECTED_MENU);
export const totalPrice = createAction(TOTAL_PRICE);
export const calcPrice = createAction(CALC_PRICE);
export const showTF = createAction(SHOW_TF);
export const checkedTF = createAction(CHECKED_TF);
export const requirement = createAction(REQUIREMENT);
export const orderSummary = createAction(ORDERSUMMARY);

const initialState = fromJS({
  menu : [],
  selectedMenu : [],
  totalPrice : 0,
  show : false,
  checkedTF : {
    card : null,
    cash : null
  },
  req : "",
  orderSummary : {
    os_req: '',
    os_paymentMethod : '',
    os_purchasingMenu : [],
    os_totalPrice : 0,
  }
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
  [SELECTED_MENU] : (state, action) => {
    const selectedMenu = action.payload;
    return state.set('selectedMenu', selectedMenu);
  },
  [TOTAL_PRICE] : (state, action) => {
    const totalPrice = action.payload;
    return state.set('totalPrice', totalPrice);
  },
  [SHOW_TF] : (state, action) => {
    const showTF = action.payload;
    return state.set('show', showTF);
  },
  [CHECKED_TF] : (state, action) => {
    const checkedTF = action.payload;
    return state.set('checkedTF', checkedTF)
  },
  [REQUIREMENT] : (state, action) =>{
    const req = action.payload;
    return state.set('req', req)
  },
  [CONTROLED_COUNT] : (state, action) => {
    let {controledMENU, updatedMenu } = action.payload;
    controledMENU = [
      ...controledMENU.slice(0,updatedMenu.id),
      updatedMenu,
      ...controledMENU.slice(updatedMenu.id+1 , controledMENU.length)
    ]
    return state.set('menu',controledMENU)
  },
  [ADD_ITEM] : (state, action) => {

  }
},initialState)