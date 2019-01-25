import React, { Component } from 'react';

import CategoryBar from 'components/CategoryBar/CategoryBar'
import Items from 'components/Items/Items';
import Order from 'components/Order/Order';
import MENU from 'menu/Menu';

class OrderMenu extends Component {
  state = {
    MENU,
    show : false,
    selectedMenu : []
  }
  confirmOrderHandler = () =>{
    alert('결제하시겠습니까?');
  }
  
  categoryBarHandler = () => {
    !this.state.show ? this.setState({show : true}) : this.setState({show : false})
  }

  addItemHandler = (id) => {
    const {MENU} = this.state;
    const index = MENU.findIndex(item => item.id === id);
    const addProduct = {
      ...MENU[index],
      ...MENU[index].count++
    }
    this.setState({
      MENU : [
        ...MENU.slice(0,index),
        addProduct,
        ...MENU.slice(index+1,MENU.length)
      ]
    })
  }

  removeItemHandler = (id) => {
    const {MENU} = this.state;
    const index = MENU.findIndex(item => item.id === id);
    if(MENU[index].count !== 0) {
      const addProduct = {
        ...MENU[index],
        ...MENU[index].count--
      }
      this.setState({
        MENU : [
          ...MENU.slice(0,index),
          addProduct,
          ...MENU.slice(index+1,MENU.length)
        ]
      })
    } else return null;
  }
  render() {
    const { categoryBarHandler, confirmOrderHandler, addItemHandler, removeItemHandler} = this;
    const { show, MENU } = this.state; 
    return(
      <>
        <CategoryBar  showAll = {categoryBarHandler}/>
        <Items 
          show = {show} menuList = {MENU} key ="mL"
          addItem = {addItemHandler}
          removeItem = {removeItemHandler}
        />
        <Order ConfirmOrder = {confirmOrderHandler}/>
      </>
    );
  }
}

export default OrderMenu;