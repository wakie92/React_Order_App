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
    controledMENU : null,
    show : false,
    selectedMenu : [],
    totalPrice : 0
  }
  setMenu = () => {
    let setMenu = MENU.map((item) => {
      return item;
    })
    this.setState({controledMENU : setMenu})
  }
  confirmOrderHandler = () =>{
    alert('결제하시겠습니까?');
  }
  
  categoryBarHandler = () => {
    // this.setMenu();
    !this.state.show ? this.setState({show : true}) : this.setState({show : false})
  }

  setControledMenu = (updatedMenu,id) => {
    const { controledMENU } = this.state;
    const index = controledMENU.findIndex(item => item.id === id);
    this.setState({
      controledMENU : [
        ...controledMENU.slice(0,index),
        updatedMenu,
          ...controledMENU.slice(index+1,controledMENU.length)
      ]
    })
  }
  itemCountHandler = (id, sign) => {
    const { controledMENU } = this.state;
    const { setControledMenu } = this;
    const index = controledMENU.findIndex(item => item.id === id);
    let controledItem = Object.assign({},controledMENU[index]);
    switch(sign) {
      case '+' :
        controledItem.count++;
        setControledMenu(controledItem, id);
        break;
      case '-' :
        if(controledMENU[index].count !==0) 
        controledItem.count--  
        setControledMenu(controledItem, id);
        break;
      case undefined :
        // let controledItem = Object.assign({},controledMENU[index]);
        controledItem.count = 0;
        setControledMenu(controledItem, id);
        break;
      default : 
        break;
    }
  }
  orderedItemHandler = (id) => {
    let { controledMENU, selectedMenu, totalPrice } = this.state;
    let arr = [...selectedMenu];
    const index = controledMENU.findIndex(item => item.id === id);
      if(controledMENU[index].count !== 0) {
        let pickedItem = Object.assign({},controledMENU[index]);
        let { count , price} = pickedItem;
        totalPrice += count*price;
        arr.push(pickedItem);
        this.setState({
          selectedMenu : arr,
          totalPrice : totalPrice
        })
      }
  }
  componentWillMount() {
    this.setMenu();
  }
  componentDidMount() {
    const { menuData, counter} = this.props;
    console.log(menuData.toJS(), counter);
  }
  render() {
    const { categoryBarHandler, confirmOrderHandler} = this;
    const { show, totalPrice ,controledMENU, selectedMenu} = this.state; 
    return(
      <>
        <CategoryBar  showAll = {categoryBarHandler}/>
        <ItemsContainer 
          show = {show} 
          controledMENU = {controledMENU} 
          // key ="mL"
          // selectedMenu = {selectedMenu}
          // totalPrice = {totalPrice}
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
  // counter : state.menuData.get('counter')
}),
(dispatch) => ({
  MenuDataActions : bindActionCreators(menuDataActions,dispatch)
})
)(OrderMenu);