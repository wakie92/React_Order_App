import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const ORDER_HISTORY = 'orderHistoryData/ORDER_HISTORY'

export const getOrderHistory = createAction(ORDER_HISTORY, api.getOrderHistory)

const initialState = fromJS({
  menu : null
})
export default handleActions({
  ...pender({
    type : ORDER_HISTORY,
    onSuccess : (state, action) => {
      const oh_test = action.payload
      return state.set('menu', oh_test)
    }
  })
}, initialState)
