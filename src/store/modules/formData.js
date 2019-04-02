import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const LOGIN_FORM_INDEX = 'formData/LOGIN_FORM_INDEX'

export const getLoginFormData = createAction(LOGIN_FORM_INDEX)

const initialState = fromJS({
  loginAuthData : {
    email: {
        elementType: 'input',
        elementConfig: {
            type: 'email',
            placeholder: 'Mail Address'
        },
        value: '',
        validation: {
            required: true,
            isEmail: true
        },
        valid: false,
        touched: false
    },
    password: {
        elementType: 'input',
        elementConfig: {
            type: 'password',
            placeholder: 'Password'
        },
        value: '',
        validation: {
            required: true,
            minLength: 6
        },
        valid: false,
        touched: false
    }
  },
  isSignUp: true,
  test : {
    a : 2,
    b: 3
  }
})

export default handleActions({
  [LOGIN_FORM_INDEX] : (state, action) => {
    const loginAuthData = action.payload;
    return state.set('loginAuthData' , loginAuthData )
  },
}, initialState)
