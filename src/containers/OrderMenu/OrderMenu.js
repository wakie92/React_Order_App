import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CategoryBar from 'components/CategoryBar/CategoryBar'
import ItemsContainer from 'containers/Items/ItemsContainer';
import Order from 'components/Order/Order';
import MENU from 'menu/Menu';
import * as menuDataActions from 'store/modules/menuData';

class OrderMenu extends Component {
  state = {
    show : false,
  }
  confirmOrderHandler = () =>{
    alert('결제하시겠습니까?');
  }
  
  categoryBarHandler = () => {
    // this.setMenu();
    !this.state.show ? this.setState({show : true}) : this.setState({show : false})
  }

  componentDidMount() {
    const { MenuDataActions } = this.props;
    MenuDataActions.getMenuList();
  }
  render() {
    const { categoryBarHandler, confirmOrderHandler} = this;
    const { show} = this.state; 
    const { menuData, selectedMenu, totalPrice } = this.props;
    console.log('OrderMenu');
    return(
      <>
        <CategoryBar  showAll = {categoryBarHandler}/>
        <ItemsContainer 
          show = {show} 
          controledMENU = {menuData} 
        />
        <Order ConfirmOrder = {confirmOrderHandler}
          totalPrice = {totalPrice}
          selectedMenu = {selectedMenu}
        />
      </>
    );
  }
}

export default connect((state) => ({
  menuData : state.menuData.get('menu'),
  selectedMenu : state.menuData.get('selectedMenu'),
  totalPrice : state.menuData.get('totalPrice')
}),
(dispatch) => ({
  MenuDataActions : bindActionCreators(menuDataActions,dispatch)
})
)(OrderMenu);