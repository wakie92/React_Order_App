import React, { Component } from 'react';

import CategoryBar from 'components/CategoryBar/CategoryBar'
import Items from 'components/Items/Items';
import Order from 'components/Order/Order';
import MENU from 'menu/Menu';

class OrderMenu extends Component {
  state = {
    MENU,
    controledMENU : null,
    show : false,
    selectedMenu : [],
    totalPrice : 0
  }
  confirmOrderHandler = () =>{
    alert('결제하시겠습니까?');
  }
  
  categoryBarHandler = () => {
    !this.state.show ? this.setState({show : true}) : this.setState({show : false})
  }

  itemCountHandler = (id, sign) => {
    const { MENU  } = this.state;
    const index = MENU.findIndex(item => item.id === id);
    if(sign === '+') {
      const addProduct = {
        ...MENU[index],
        ...MENU[index].count++
      }
      this.setState({
        controledMENU : [
          ...MENU.slice(0,index),
          addProduct,
          ...MENU.slice(index+1,MENU.length)
        ]
      })
    } else if(sign === '-' && MENU[index].count !== 0) {
      const addProduct = {
        ...MENU[index],
        ...MENU[index].count--
      }
      this.setState({
        controledMENU : [
          ...MENU.slice(0,index),
          addProduct,
          ...MENU.slice(index+1,MENU.length)
        ]
      })
    } else if(sign === undefined) {
      console.log()
      const resetCnt = {
        ...MENU[index],
        ...MENU[index].count = 0
      }
      this.setState({
        controledMENU : [
          ...MENU.slice(0,index),
          resetCnt,
          ...MENU.slice(index+1,MENU.length)
        ]
      })
    } return null
  
  }

  orderedItemHandler = (id) => {
    let { MENU, selectedMenu } = this.state;
    const {itemCountHandler} = this;
    const index = MENU.findIndex(item => item.id === id);
    console.log(MENU);
      if(MENU[index].count !== 0) {
        selectedMenu.push(MENU[index]);
        this.setState({selectedMenu :selectedMenu})
        console.log(selectedMenu);
      } else {
        console.log('remove')
      }
  }
  render() {
    const { categoryBarHandler, confirmOrderHandler,
            itemCountHandler, removeItemHandler, orderedItemHandler} = this;
    const { show, MENU, totalPrice } = this.state; 
    console.log(this.state.controledMENU)
    return(
      <>
        <CategoryBar  showAll = {categoryBarHandler}/>
        <Items 
          show = {show} menuList = {MENU} key ="mL"
          itemCount = {itemCountHandler}
          removeItem = {removeItemHandler}
          orderedItem = {orderedItemHandler}
        />
        <Order ConfirmOrder = {confirmOrderHandler}
          totalPrice = {totalPrice}
        />
      </>
    );
  }
}

export default OrderMenu;