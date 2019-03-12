import { createAction, handleActions } from 'redux-action';
import { fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const ORDER_HISTORY = 'orderHistoryData/ORDER_HISTORY'

export const getOrderHistory = createAction(ORDER_HISTORY, api.getOrderHistory)

const initialState = fromJS({

})
export default handleActions({

}, initialState)
