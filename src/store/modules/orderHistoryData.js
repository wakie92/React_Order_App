import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const ORDER_HISTORY = 'orderHistoryData/ORDER_HISTORY'

export const getOrderHistory = createAction(ORDER_HISTORY, api.getOrderHistory)

const initialState = fromJS({
  orderHistoryItems : null
})

export default handleActions({
  ...pender({
    type : ORDER_HISTORY,
    onPending : (state, action) => {
      return console.log('[Pending] : ORDER_HISTORY');
    },
    onFailure : (state, action) => {
      return console.log('[Error] : ORDER_HISTORY');
    },
    onSuccess : (state, action) => {
      const orderHistoryItems = action.payload
      return state.set('orderHistoryItems', orderHistoryItems)
    }
  })
}, initialState)
