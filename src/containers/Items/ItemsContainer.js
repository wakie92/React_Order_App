import React, {Component} from 'react';
import Items from 'components/Items/Items';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataUIActions from 'store/modules/menuDataUI';
import * as menuDataActions from 'store/modules/menuData';

class ItemsContainer extends Component {
  
  setControledMenu = (updatedMenu) => {
    let { controledMENU, MenuDataUIActions } = this.props;
    console.log(controledMENU);
    console.log(updatedMenu);
     MenuDataUIActions.controledCount({ updatedMenu, controledMENU});
  }

  itemCountHandler = (id, sign) => {
    const { controledMENU } = this.props;
    const { setControledMenu } = this;
    const index = controledMENU.findIndex(item => item.id === id);
    let controledItem = {...controledMENU[index]};
    console.log(controledItem);
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
    let { controledMENU, MenuDataUIActions,selectedMenu,totalPrice } = this.props;
    let arr = [...selectedMenu];
    const index = controledMENU.findIndex(item => item.id === id);
    this.itemCountHandler(id);
    if(controledMENU[index].counter !== 0) {
      let pickedItem = {...controledMENU[index]};
      const {counter, price} = pickedItem;
      totalPrice += counter*price;
      MenuDataUIActions.totalPrice(totalPrice);
      arr.push(pickedItem);
      MenuDataUIActions.selectedMenu(arr);  
      }
  }
  componentDidMount() {
    console.log('[ITEMS_CONTAINER] : componentDidMount')
  }
  componentWillReceiveProps(newProps) {
    console.log('[ITEMS_CONTAINER] : componentWillReceiveProps')
    console.log(newProps)
  }
  componentDidUpdate() {
    console.log('[ITEMS_CONTAINER] : componentDidUpdate')
    
  }
  render() {
    console.log('[ITEMS_CONTAINER] : render')
    const { show ,controledMENU, updatedMenuList} = this.props;
    const { itemCountHandler, orderedItemHandler } = this;
    console.log(controledMENU);
  return(
    <Items 
      show = {show} 
      menuList = {controledMENU} key ="mL"
      itemCount = {itemCountHandler}
      orderedItem = {orderedItemHandler}
    />
  );
}
}

export default connect((state) => ({
  selectedMenu : state.menuDataUI.get('selectedMenu'),
  totalPrice : state.menuDataUI.get('totalPrice'),
}),
(dispatch) => ({
  MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch),
  MenuDataActions : bindActionCreators(menuDataActions,dispatch)
}))(ItemsContainer)