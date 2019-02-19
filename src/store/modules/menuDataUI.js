import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const CONTROLED_COUNT = 'menuDataUI/CONTROLED_COUNT';
const ADD_ITEM = 'menuDataUI/ADD_ITEM';
const SELECTED_MENU = 'menuDataUI/SELECTED_MENU';
const TOTAL_PRICE = 'menuDataUI/TOTAL_PRICE';
const CALC_PRICE = 'menuDataUI/CALC_PRICE';
const SHOW_TF = 'menuDataUI/SHOW_TF';
const CHECKED_TF = 'menuDataUI/CHECKED_TF';
const REQUIREMENT = 'menuDataUI/REQUIREMENT';
const ORDERSUMMARY = 'menuDataUI/ORDERSUMMARY';
const MODAL_SHOW = 'menuDataUI/MODAL_SHOW';
const AMOUNT_TO_PAY = 'menuDataUI/AMOUNT_TO_PAY';
const GET_MENU_LIST = 'menuDataUI/GET_MENU_LIST';
const GET_INITIALSTATE = 'menuDataUI/GET_INITIALSTATE';
const POST_MENU = 'menuDataUI/POST_MENU';

export const controledCount = createAction(CONTROLED_COUNT);
export const addItem = createAction(ADD_ITEM);
export const selectedMenu = createAction(SELECTED_MENU);
export const totalPrice = createAction(TOTAL_PRICE);
export const calcPrice = createAction(CALC_PRICE);
export const showTF = createAction(SHOW_TF);
export const checkedTF = createAction(CHECKED_TF);
export const requirement = createAction(REQUIREMENT);
export const orderSummary = createAction(ORDERSUMMARY);
export const modalShow = createAction(MODAL_SHOW);
export const amountToPay = createAction(AMOUNT_TO_PAY);
export const getMenuList = createAction(GET_MENU_LIST,api.getMenuList);
export const getInitialState = createAction(GET_INITIALSTATE);
export const postMenu = createAction(POST_MENU, api.postOrderedMenu);
export const postMenuAsync = (order) => dispatch => {
  dispatch(orderSummary(order));
  return dispatch(postMenu(order))
}
const initialState = fromJS({
  menu : [],
  updatedMenuList : [],
  selectedMenu : [],
  totalPrice : 0,
  show : true,
  checkedTF : {
    card : null,
    cash : null
  },
  req : "",
  amountToPay : 0,
  orderSummary : {
    os_req: '',
    os_paymentMethod : '',
    os_purchasingMenu : [],
    os_totalPrice : 0,
  },
  modalShow : null
})

export default handleActions({
  ...pender({
    type : GET_MENU_LIST,
    onSuccess : (state, action) => {
      let menuData = action.payload.data;
      menuData.map((item) => {
        return {...item, ...item.counter = 0, ...item.secleted = false}
      })
      return state.set('menu', menuData);
    }
  }),
  ...pender({
    type : POST_MENU,
    onSuccess : (state, action) => {
      const orderSummary = action.payload;
      console.log(orderSummary);
      orderSummary.data['name'] = 'sdfsdf'
      return state.set('orderSummary', orderSummary)
    }
  }),
  [GET_INITIALSTATE] : (state, action) => initialState,
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
  [MODAL_SHOW] : (state, action) => {
    const modalShow = action.payload;
    return state.set('modalShow', modalShow)
  },
  [AMOUNT_TO_PAY] : (state, action) => {
    const amountToPay = action.payload;
    return state.set('amountToPay', amountToPay); 
  },
  [ORDERSUMMARY] : (state, action) => {
    const orderSummary = action.payload;
    console.log(orderSummary);
    return state.set('orderSummary', orderSummary)
  }
},initialState)