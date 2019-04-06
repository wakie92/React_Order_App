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
const SELECTED_ITEM = 'menuDataUI/SELECTED_ITEM';
const CONFIRM = 'menuDataUI/CONFIRM';
const TOOLBAR = 'menuDataUI/TOOLBAR';
const OL_MOBILE = 'menuDataUI/OL_MOBILE';
const BACKDRAW = 'menuDataUI/BACKDRAW';
const COUNTER_UP = 'menuDataUI/COUNTER_UP';
const REQUIREMENT_BEFORE = 'menuDataUI/REQUIREMENT_BEFORE';
const DELETE_PRICE = 'menuDataUI/DELETE_PRICE';

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
export const selectedItem = createAction(SELECTED_ITEM);
export const confirm = createAction(CONFIRM);
export const toolbar = createAction(TOOLBAR);
export const ol_mobile = createAction(OL_MOBILE);
export const backDraw = createAction(BACKDRAW);
export const deletePrice = createAction(DELETE_PRICE);
export const requirement_before = createAction(REQUIREMENT_BEFORE);
export const counterUp = createAction(COUNTER_UP,api.putCounterUp);
export const postMenuAsync = (order) => dispatch => {
  dispatch(orderSummary(order));
  return dispatch(postMenu(order))
}
const initialState = fromJS({
  orderHistory : null,
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
    os_userId : ''
  },
  modalShow : false,
  selectedItem : null,
  confirm : false,
  toolbar : false,
  ol_mobile : false,
  backDraw : false,
})

export default handleActions({
  ...pender({
    type : GET_MENU_LIST,
    onPending : (state, action) => {
      return console.log('[Pending] : GET_MENU_LIST');
    },
    onFailure : (state, action) => {
      return console.log('[Error] : GET_MENU_LIST');
    },
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
    onPending : (state, action) => {
      return console.log('[Pending] : POST_MENU');
    },
    onFailure : (state, action) => {
      return console.log('[Error] : POST_MENU');
    },
    onSuccess : (state, action) => {
      const orderSummary = action.payload;
      return state.set('orderSummary', orderSummary)
    }
  }),
  ...pender({
    type: COUNTER_UP,
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
  [TOOLBAR] : (state, action) => {
    const toolbar = action.payload;
    return state.set('toolbar', toolbar)
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
    return state.set('orderSummary', orderSummary)
  },
  [SELECTED_ITEM] : (state, action) => {
    const selectedItem = action.payload;
    return state.set('selectedItem', selectedItem)
  },
  [CONFIRM] : (state, action) => {
    const confirm = action.payload;
    return state.set('confirm',confirm)
  },
  [OL_MOBILE] : (state, action) => {
    const ol_mobile = action.payload;
    return state.set('ol_mobile',ol_mobile)
  },
  [BACKDRAW] : (state, action) => {
    const backDraw = action.payload;
    return state.set('backDraw',backDraw)
  },
  [DELETE_PRICE] : (state, action) => {
    const deletedItem  = action.payload;
    console.log(deletedItem)
    // return state.update('totalPrice', totalPrice => totalPrice-deletedItem.price)
  },
},initialState)