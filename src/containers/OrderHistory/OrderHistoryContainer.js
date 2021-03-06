import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrderHistory from 'components/OrderHistory/OrderHistory'
import {withFirebase}  from 'hoc/Firebase';
import withCheckLogin from 'hoc/withCheckLogin';
import * as menuDataUIActions from 'store/modules/menuDataUI'
import * as orderHistoryDataActions from 'store/modules/orderHistoryData';
import * as loginDataActions from 'store/modules/loginData'
class OrderHistoryContainer extends Component {

  getData = async () => {
    const { OrderHistoryDataActions , loginUser, firebase , unLoginedUser}  = this.props;
    let curUser = loginUser === null ? unLoginedUser : loginUser
    const user =  await firebase.orderHistory(curUser);
    OrderHistoryDataActions.saveHistory(user);
  }

  componentDidMount () {
    const { handleCheckLogin } = this.props;
    handleCheckLogin();
    this.getData();
  }
  render() {
    const { orderHistoryItems }  = this.props;
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
  UserData : state.loginData.get('loginUser'),
  unLoginedUser : state.loginData.get('unLoginUser'),
  isLogined : state.loginData.get('isLogined')
}),
(dispatch) => ({
    MenuDataUIActions : bindActionCreators(menuDataUIActions, dispatch),
    OrderHistoryDataActions : bindActionCreators(orderHistoryDataActions, dispatch),
    LoginDataActions : bindActionCreators(loginDataActions, dispatch)
    // firebase 사용법 실험용 
}))(withFirebase(withCheckLogin(OrderHistoryContainer)));