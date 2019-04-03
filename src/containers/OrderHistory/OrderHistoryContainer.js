import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrderHistory from 'components/OrderHistory'
import {withFirebase}  from 'hoc/Firebase';
import * as menuDataUIActions from 'store/modules/menuDataUI'
import * as orderHistoryDataActions from 'store/modules/orderHistoryData';
import * as loginDataActions from 'store/modules/loginData'
class OrderHistoryContainer extends Component {

  getDataTest = async () => {
    const { OrderHistoryDataActions , loginUser, firebase }  = this.props;
    const user =  await firebase.orderHistory(loginUser);
    await OrderHistoryDataActions.saveHistory(user);
  }

  componentDidMount () {
    this.getDataTest();
  }
  render() {
    const { orderHistoryItems }  = this.props;
    console.log(this.props);
    console.log('render [ OrderHistoryContainer ]')
    return (
      <OrderHistory
        Oh_List = {orderHistoryItems} 
      />
    );
  }
}

export default connect((state) => ({
  orderHistoryItems : state.orderHistoryData.get('orderHistoryItems'),
  loginUser : state.loginData.getIn(['loginUser', 'userId']),
}),
(dispatch) => ({
    MenuDataUIActions : bindActionCreators(menuDataUIActions, dispatch),
    OrderHistoryDataActions : bindActionCreators(orderHistoryDataActions, dispatch),
    LoginDataActions : bindActionCreators(loginDataActions, dispatch)
    // firebase 사용법 실험용 
}))(withFirebase(OrderHistoryContainer));