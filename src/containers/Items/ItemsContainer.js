import React, {Component} from 'react';
import Items from 'components/Items/Items';


class ItemsContainer extends Component {
  state = {
    controledMENU : null,
    selectedMenu : [],
    totalPrice : 0
  }
  setControledMenu = (updatedMenu,id) => {
    const { controledMENU } = this.props;
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
    const { controledMENU } = this.props;
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
  render() {
    const { show ,controledMENU} = this.props;
    const { itemCountHandler, removeItemHandler, orderedItemHandler } = this;
  return(
    <Items 
      show = {show} menuList = {controledMENU} key ="mL"
      itemCount = {itemCountHandler}
      removeItem = {removeItemHandler}
      orderedItem = {orderedItemHandler}
    />
  );
}
}

export default ItemsContainer;