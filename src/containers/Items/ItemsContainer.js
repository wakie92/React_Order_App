import React, {Component} from 'react';
import Items from 'components/Items/Items';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataUIActions from 'store/modules/menuDataUI';
import * as menuDataActions from 'store/modules/menuData';

class ItemsContainer extends Component {
  setControledMenu = (updatedMenu) => {
    let { controledMENU, MenuDataUIActions } = this.props;
     MenuDataUIActions.controledCount({ updatedMenu, controledMENU});
  }

  itemCountHandler = (id, sign) => {
    const { controledMENU } = this.props;
    const { setControledMenu } = this;
    let controledItem = {...controledMENU[id]};
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
    this.itemCountHandler(id);
    if(controledMENU[id].counter !== 0) {
      let pickedItem = {...controledMENU[id]};
      const {counter, price} = pickedItem;
      let index = arr.findIndex(item => item.id === pickedItem.id);
      //좀더 최적화 가능할듯 아직은 되는 정도()
      if(index !== -1){
        arr[index].counter += pickedItem.counter;
      }else {
        arr.push(pickedItem);
      }
      totalPrice += counter*price;
      MenuDataUIActions.totalPrice(totalPrice);
      MenuDataUIActions.selectedMenu(arr);  
      }
  }
  componentDidMount() {
    console.log('[ITEMS_CONTAINER] : componentDidMount')
  }
  componentWillReceiveProps(newProps) {
    console.log('[ITEMS_CONTAINER] : componentWillReceiveProps')
  }
  componentDidUpdate() {
    console.log('[ITEMS_CONTAINER] : componentDidUpdate')
    
  }
  render() {
    console.log('[ITEMS_CONTAINER] : render')
    const { show ,controledMENU, menuData, updatedMenuList} = this.props;
    const { itemCountHandler, orderedItemHandler } = this;
  return(
    <Items 
      show = {show} 
      menuList = {controledMENU} 
      itemCount = {itemCountHandler}
      orderedItem = {orderedItemHandler}
    />
  );
}
}

export default connect((state) => ({
  selectedMenu : state.menuDataUI.get('selectedMenu'),
  totalPrice : state.menuDataUI.get('totalPrice'),
  menuData : state.menuDataUI.get('menu'),
  requirement :  state.menuDataUI.get('requirement')
}),
(dispatch) => ({
  MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch),
  MenuDataActions : bindActionCreators(menuDataActions,dispatch)
}))(ItemsContainer)