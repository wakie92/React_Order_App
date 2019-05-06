import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as orderHistoryDataActions from 'store/modules/orderHistoryData';
import Input from 'components/UI/Input/Input';
import ReviewLayout from 'components/Review/ReviewLayout/ReviewLayout';
import ReviewInput from 'components/Review/ReviewInput/ReviewInput'
// import Reviews from 'components/Review/Reviews/Reviews'
class ReviewContainer extends Component {
  state = {
    reviewForm : {
      requirement: {
          elementType: 'textarea',
          elementConfig: {
              type: 'textarea',
              placeholder: '리뷰를 입력해 주세요',
              name : 'req'
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

  render() {
    const {reviewForm} = this.state;
    let formElements = [];
    for (let key in reviewForm) {
      formElements.push({
        id : key,
        config : reviewForm[key]
      })
    }
    const form = formElements.map(formElement => (
      <Input
        key = {formElement.id}
        elementType = {formElement.config.elementType}
        elementConfig = {formElement.config.elementConfig}
        name = {formElement.config.name}
        // value = {this.props.review}
        invalid = {!formElement.config.valid}
        shouldValidate = {formElement.config.validation}
        touched = {formElement.config.touched}
        // changed = {(e) => }
      />
    ))
    return (
      <>
        <ReviewLayout>
          <ReviewInput
            inputForm = {form}
          />
          {/* <Reviews/> */}
        </ReviewLayout>
      </>
    );
  }
}

export default connect ((state) => ({

}),
(dispatch) => ({
  OrderHistoryDataActions : bindActionCreators(orderHistoryDataActions, dispatch)
}))(ReviewContainer);