import React, { Component } from 'react';
import Order from 'components/Order/Order';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataActions from 'store/modules/menuData';

class OrderContainer extends Component {

  confirmOrderHandler = () =>{
    alert('결제하시겠습니까?');
  }
  
  render() {
    const { totalPrice , selectedMenu } = this.props;
    const { confirmOrderHandler, } = this;

    return (
      <Order
        ConfirmOrder = {confirmOrderHandler}
        totalPrice = {totalPrice}
        selectedMenu = {selectedMenu}
      />
    );
  }
}

export default connect((state) => ({
  selectedMenu : state.menuData.get('selectedMenu'),
  totalPrice : state.menuData.get('totalPrice')
}),
(dispatch) =>({
  MenuDataActions : bindActionCreators(menuDataActions,dispatch)
}))(OrderContainer);