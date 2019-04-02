import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Input from 'components/UI/Input/Input'
class InputFormContainer extends Component {
  state = {
    orderForm: {
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        payMethod: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: 'card', displayValue: 'card'},
                    {value: 'cash', displayValue: 'cash'}
                ]
            },
            value: '',
            valid: true
        }
    },
    formIsValid: false,
    loading: false
}

//수정하기
  orderHandler = (e) => {
    e.preventDefault();
    this.setState({loading : true});
    const formData = {};
    for(let formElementId in this.state.orderForm) {
      formData[formElementId] = this.state.orderFrom[formElementId].value;
    }
  }
  
  checkValidity(value, rules) {
    let isValid = true;

    if(rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if(rules.minLenth) {
      isValid = value.lenth >= rules.minLength && isValid;
    }

    if(rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (e, inputId) => {
    const updatedOrderForm = {...this.state.orderForm};
    const updatedFormElement = {...updatedOrderForm[inputId]};
    updatedFormElement.value = e.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedOrderForm[inputId] = updatedFormElement;

    let formIsValid = true;
    for (let inputId in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputId].valid && formIsValid;
    }
    this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
  }
  render() {
    const formElementsArray = [];
    for(let key in this.state.orderForm) {
      formElementsArray.push({
        id : key,
        config : this.state.orderForm[key]
      })
    }
    let form = (
      <form onSubmit = {this.orderHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key = {formElement.id}  
            elementType = {formElement.config.elementType}
            elementConfig = {formElement.config.elementConfig}
            value = {formElement.config.value}
            invalid = {!formElement.config.valid}
            shouldValidate = {formElement.config.validation}
            touched = {formElement.config.touched}
            changed = {(e) => this.inputChangedHandler(e, formElement.id)}
          />
        )) }
      </form>
    );
    if(this.state.loading) {
      form = <div>로딩즁....</div>
    }
    return (
      <div>
        {form}
      </div>
    );
  }
}

export default connect((state) => ({

}),
(dispatch) => ({

}))(InputFormContainer);