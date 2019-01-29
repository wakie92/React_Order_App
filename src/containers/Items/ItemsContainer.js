import React, {Component} from 'react';
import Items from 'components/Items/Items';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataActions from 'store/modules/menuData';

class ItemsContainer extends Component {
  state = {
    selectedMenu : [],
  }
  setControledMenu = (updatedMenu) => {
    let { controledMENU, MenuDataActions } = this.props;
    MenuDataActions.controledCount({updatedMenu, controledMENU});
  }
  itemCountHandler = (id, sign) => {
    const { controledMENU } = this.props;
    const { setControledMenu } = this;
    const index = controledMENU.findIndex(item => item.id === id);
    let controledItem = {...controledMENU[index]};
    switch(sign) {
      case '+' :
        controledItem.counter++;
        setControledMenu(controledItem);
        break;
      case '-' :
        if(controledItem.counter !==0) 
        controledItem.counter--  
        setControledMenu(controledItem);
        break;
      case undefined :
        controledItem.counter = 0;
        setControledMenu(controledItem);
        break;
      default : 
        break;
    }
  }
  orderedItemHandler = (id) => {
    let { controledMENU, MenuDataActions,selectedMenu,totalPrice } = this.props;
    let arr = [...selectedMenu];
    const index = controledMENU.findIndex(item => item.id === id);
    if(controledMENU[index].counter !== 0) {
      let pickedItem = {...controledMENU[index]};
      const {counter, price} = pickedItem;
      totalPrice += counter*price;
      MenuDataActions.totalPrice(totalPrice);
      arr.push(pickedItem);
      MenuDataActions.selectedMenu(arr);  
      }
    this.itemCountHandler(id);
  }
  render() {
    const { show ,controledMENU} = this.props;
    const { itemCountHandler, orderedItemHandler } = this;
    
  return(
    <Items 
      show = {show} menuList = {controledMENU} key ="mL"
      itemCount = {itemCountHandler}
      orderedItem = {orderedItemHandler}
    />
  );
}
}

export default connect((state) => ({
  selectedMenu : state.menuData.get('selectedMenu'),
  totalPrice : state.menuData.get('totalPrice')
}),
(dispatch) => ({
  MenuDataActions : bindActionCreators(menuDataActions,dispatch)
}))(ItemsContainer)