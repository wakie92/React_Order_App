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
              ,{value : this.props.totalPrice, displayValue : '금액에 맞게'}
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
    const { MenuDataUIActions } = this.props;
    if(controlForm === 'requirement') {
      MenuDataUIActions.requirement(e.target.value);
    } else {
      if(e.target.value === '카드') {
        MenuDataUIActions.checkedTF({card : true});
        MenuDataUIActions.amountToPay(e.target.value);
      }else {
        MenuDataUIActions.checkedTF({cash : true})
        MenuDataUIActions.amountToPay(e.target.value);
      }
     }
  }
  shouldComponentUpdate(nextProps, nextState ) {
    console.log(this.props.selectedMenu)
    console.log(nextProps.selectedMenu)
    return nextProps.selectedMenu !== this.props.selectedMenu
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
        value = {this.props.req_before}
        name = { formElement.config.name}
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
  selectedMenu : state.menuDataUI.get('selectedMenu')
}),
(dispatch) =>({
  MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch)
}))(OrderRequirement);