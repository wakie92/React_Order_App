import React, { Component } from 'react';

import CategoryBar from 'components/CategoryBar/CategoryBar'
import Items from 'components/Items/Items';
import Order from 'components/Order/Order';
import MENU from 'menu/Menu';

class OrderMenu extends Component {
  state = {
    controledMENU : null,
    show : false,
    selectedMenu : [],
    totalPrice : 0
  }
  setMenu = () => {
    let {controledMENU, selectedMenu} = this.state;
    let settt = MENU.map((item) => {
      return item;
    })
    console.log('setmenu');
    this.setState({controledMENU : settt})
    return controledMENU;
  }
  confirmOrderHandler = () =>{
    alert('결제하시겠습니까?');
  }
  
  categoryBarHandler = () => {
    // this.setMenu();
    !this.state.show ? this.setState({show : true}) : this.setState({show : false})
  }

  itemCountHandler = (id, sign) => {
    const { controledMENU } = this.state;
    const index = controledMENU.findIndex(item => item.id === id);
    if(sign === '+') {
      controledMENU.filter((ele) => {
        if(ele === controledMENU[index]) {
          ele.count++;
          return ele;
        } return null;
      })
      this.setState({
        controledMENU : controledMENU
      })
    } else if(sign === '-' && MENU[index].count !== 0) {
      MENU.filter((ele) => {
        if(ele === MENU[index]) {
          ele.count--;
          return ele;
        } return null;
      })
      this.setState({
        controledMENU : controledMENU,
      })
    } else if(sign === undefined) {
      MENU.filter((ele) => {
        if(ele === MENU[index]) {
          ele.count = 0;
        }
        return ele;
      })
      this.setState({
        controledMENU : controledMENU,
      })
    } return null
  
  }

  orderedItemHandler = (id) => {
    let { controledMENU, selectedMenu, totalPrice } = this.state;
    const index = controledMENU.findIndex(item => item.id === id);
      if(controledMENU[index].count !== 0) {
       controledMENU.filter((ele) => {
          if(ele === controledMENU[index]) {
            totalPrice += ele.count*ele.price;
            selectedMenu.push(ele);
            return selectedMenu 
          } return null;
        })
        this.setState({
          selectedMenu : selectedMenu,
          totalPrice : totalPrice
        })
      } else {
        console.log('remove')
      }
  }
  componentWillMount() {
    this.setMenu();
  }
  render() {
    const { categoryBarHandler, confirmOrderHandler,
            itemCountHandler, removeItemHandler, orderedItemHandler} = this;
    const { show, totalPrice ,controledMENU, selectedMenu} = this.state; 
    return(
      <>
        <CategoryBar  showAll = {categoryBarHandler}/>
        <Items 
          show = {show} menuList = {controledMENU} key ="mL"
          itemCount = {itemCountHandler}
          removeItem = {removeItemHandler}
          orderedItem = {orderedItemHandler}
        />
        <Order ConfirmOrder = {confirmOrderHandler}
          totalPrice = {totalPrice}
          selectedMenu = {selectedMenu}
        />
      </>
    );
  }
}

export default OrderMenu;