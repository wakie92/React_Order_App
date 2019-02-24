import React, { Component } from 'react';
import OrderList from 'components/Order/OrderList'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as menuDataUIActions from 'store/modules/menuDataUI';
class OrderListContainer extends Component {
  
  handleSelect = (id) => {
    const { MenuDataUIActions, selectedMenu } = this.props;
    let arr = [...selectedMenu];
    const index = arr.findIndex(item => item.id === id);
    arr.map(item => {
      return item.id === id ? item.selected = true : item.selected = false
    })
    MenuDataUIActions.selectedItem(arr[index])
    MenuDataUIActions.selectedMenu(arr);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    //성공
    return nextProps.selectedMenu !== this.props.selectedMenu;
  }
  render() {
    const { selectedMenu }  = this.props;
    const { handleSelect }  = this;
    return (
      <OrderList 
        toggleSelect = {handleSelect}
        selectedMenu = {selectedMenu}
      />
    );
  }
}

export default connect((state) => ({
  selectedMenu : state.menuDataUI.get('selectedMenu')
}),
(dispatch) => ({
  MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch)
})
)(OrderListContainer);