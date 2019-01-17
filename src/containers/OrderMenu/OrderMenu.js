import React, { Component } from 'react';

import CategoryBar from 'components/CategoryBar/CategoryBar'
import Items from 'components/Items/Items';
import Order from 'components/Order/Order';
import MENU from 'menu/Menu';

class OrderMenu extends Component {
  state = {
    MENU,
    show : false,
  }
  confirmOrderHandler = () =>{
    alert('결제하시겠습니까?');
  }
  
  categoryBarHandler = () => {
    !this.state.show ? this.setState({show : true}) : this.setState({show : false})
  }

  render() {
    return(
      <>
        <CategoryBar  showAll = {this.categoryBarHandler}/>
        <Items show = {this.state.show} menuList = {this.state.MENU} key ="mL"/>
        <Order ConfirmOrder = {this.confirmOrderHandler}/>
      </>
    );
  }
}

export default OrderMenu;