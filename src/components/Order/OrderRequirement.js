import React , {Component} from 'react';
import classes from './OrderRequirement.module.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataUIActions from 'store/modules/menuDataUI';
import Input from 'components/UI/Input/Input';

class OrderRequirement extends Component {
  state = {
    reqForm : {
      requirement: {
          elementType: 'textarea',
          elementConfig: {
              type: 'textarea',
              placeholder: '요청사항',
              name : 'req'
          },
          value: '',
          validation: {
              required: true,
          },
          valid: true,
          touched: false
      },
      payments: {
        elementType: 'select',
        elementConfig: {
            type: 'select',
            placeholder: '요청사항',
            name : 'payments',
            options : [
              {value : '', displayValue : '----------------'}
              ,{value : '카드', displayValue : '카드'}
              ,{value : '10000', displayValue : '10000원'}
              ,{value : '15000', displayValue : '15000원'}
              ,{value : '20000', displayValue : '20000원'}
              ,{value : 'totalPrice', displayValue : '금액에 맞게'}
            ]
        },
        value: '',
        validation: {
            required: true,
        },
        valid: true,
        touched: false
    },
    }
}
  handleRequirementChange = (e, controlForm) => {
    const { MenuDataUIActions, totalPrice } = this.props;
    if(controlForm === 'requirement') {
      MenuDataUIActions.requirement(e.target.value);
    } else {
      if(e.target.value === '카드') {
        MenuDataUIActions.checkedTF({card : true});
        MenuDataUIActions.amountToPay(e.target.value);
        MenuDataUIActions.selectView(e.target.value)
      } else if(e.target.value === '') {
        MenuDataUIActions.checkedTF({cash : false , card : false});
        MenuDataUIActions.amountToPay(e.target.value);
        MenuDataUIActions.selectView(e.target.value)
      } else if(e.target.value === 'totalPrice') {
        MenuDataUIActions.checkedTF({cash : true});
        MenuDataUIActions.amountToPay(totalPrice);
        MenuDataUIActions.selectView(e.target.value)
      } else {
        MenuDataUIActions.checkedTF({cash : true});
        MenuDataUIActions.amountToPay(e.target.value);
        MenuDataUIActions.selectView(e.target.value)
      }
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.amountToPay !== this.props.amountToPay
        || nextProps.req !== this.props.req
        || nextProps.totalPrice !== this.props.totalPrice
  }
  render() {
    const {reqForm} = this.state;
    const {handleRequirementChange} = this;
    let formElements = []
    for (let key in reqForm ) {
      formElements.push({
        id : key,
        config : reqForm[key]
      })
    }
    const form = formElements.map(formElement => (
      <Input
        key = {formElement.id}
        elementType = {formElement.config.elementType}
        elementConfig = {formElement.config.elementConfig}
        name = { formElement.config.name}
        valueReq = {this.props.req}
        valuePaymentMethod = {this.props.selectView}
        invalid = {!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched = {formElement.config.touched}
        changed = {(e) => handleRequirementChange(e, formElement.id)}
      />
    ))
    return(
      <div className = {classes.ReqBox}>
        {form}
      </div>
    )
  }
}
export default connect((state) => ({
  modalshow : state.menuDataUI.get('modalshow'),
  confirm : state.menuDataUI.get('confirm'),
  selectedMenu : state.menuDataUI.get('selectedMenu'),
  req :  state.menuDataUI.get('req'),
  checkedTF : state.menuDataUI.get('checkedTF'),
  amountToPay : state.menuDataUI.get('amountToPay'),
  totalPrice : state.menuDataUI.get('totalPrice'),
  selectView : state.menuDataUI.get('selectView')
}),
(dispatch) =>({
  MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch)
}))(OrderRequirement);