import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const SAVE_HISTORY = 'orderHistoryData/SAVE_HISTORY'
export const saveHistory = createAction(SAVE_HISTORY)

const initialState = fromJS({
  orderHistoryItems : null
})

export default handleActions({
  [SAVE_HISTORY] : (state, action) => {
    const orderLog = action.payload;
    return state.set('orderHistoryItems', orderLog)
  }

}, initialState)
