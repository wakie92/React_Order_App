import React, { Component } from 'react';
import OrderList from 'components/Order/OrderList'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as menuDataUIActions from 'store/modules/menuDataUI';
class OrderListContainer extends Component {
  
  handleDelete = (id) => {
    const { MenuDataUIActions, selectedMenu } = this.props;
    let arr = selectedMenu.filter(item => item.id !==id )
    MenuDataUIActions.selectedMenu(arr);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    //성공
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
  selectedMenu : state.menuDataUI.get('selectedMenu')
}),
(dispatch) => ({
  MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch)
})
)(OrderListContainer);