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
    const { OrderHistoryDataActions , loginUser}  = this.props;
    const user = loginUser;
    await OrderHistoryDataActions.getOrderHistory(user);
  }

  componentDidMount () {
    this.getDataTest();
  }
  render() {
    const { menu }  = this.props;
    console.log('render [ OrderHistoryContainer ]')
    return (
      <OrderHistory
        Oh_List = {menu} 
      />
    );
  }
}

export default connect((state) => ({
  menu : state.orderHistoryData.get('menu'),
  loginUser : state.loginData.getIn(['loginUser', 'id']),
}),
(dispatch) => ({
    MenuDataUIActions : bindActionCreators(menuDataUIActions, dispatch),
    OrderHistoryDataActions : bindActionCreators(orderHistoryDataActions, dispatch),
    LoginDataActions : bindActionCreators(loginDataActions, dispatch)
    // firebase 사용법 실험용 
}))(withFirebase(OrderHistoryContainer));