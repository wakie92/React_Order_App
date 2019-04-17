import React, { Component } from 'react';
import OrderList from 'components/Order/OrderList'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as menuDataUIActions from 'store/modules/menuDataUI';
class OrderListContainer extends Component {

  handleDelete = (idx) => {
    const { MenuDataUIActions, selectedMenu, totalPrice } = this.props;
    let deletedArr = selectedMenu.filter((item, index) => index!==idx );
    let deletedPrice = totalPrice - (selectedMenu[idx].price * selectedMenu[idx].counter);
    MenuDataUIActions.selectedMenu(deletedArr);
    MenuDataUIActions.totalPrice(deletedPrice);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.selectedMenu !== this.props.selectedMenu;
  }
  render() {
    const { selectedMenu }  = this.props;
    const { handleDelete }  = this;
    return (
      <OrderList 
        deleteItem = {handleDelete}
        selectedMenu = {selectedMenu}
      />
    );
  }
}

export default connect((state) => ({
  selectedMenu : state.menuDataUI.get('selectedMenu'),
  totalPrice : state.menuDataUI.get('totalPrice')
}),
(dispatch) => ({
  MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch)
})
)(OrderListContainer);