import React, { Component } from 'react';
import Item from 'components/Items/Item/Item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataUIActions from 'store/modules/menuDataUI';

class ItemContainer extends Component {

  state = {
    counter : 0
  }
  setControledMenu = (updatedMenu) => {
    let { controledMENU, MenuDataUIActions } = this.props;
     MenuDataUIActions.controledCount({ updatedMenu, controledMENU});
  }

  //count 코드 최적화 해야함//
  //itemsContainer에서 id찾고 카운트 올릴 필요 없음.
  //해결한다면 렌더링 횟수 줄어들것으로 예상
  itemCountHandler = (id, sign) => {
    let { name, price, key, counter, img  } = this.props.menu;
    const { setControledMenu } = this;
    let controledItem = {...this.props.menu};
    switch(sign) {
      case '+' :
        // controledItem.counter++;
        this.setState({counter : counter++})
        // setControledMenu(controledItem);
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
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.menu.counter !== this.props.menu.counter;
  }
  render() {
    const {menu,orderedItem, itemCount } = this.props;
    const { name, price, key, counter, img , id }  = menu;
    console.log('[ITEMCONTAINER]',id)
    console.log(this.props);
    return (
        <Item name = {name} price = {price} key = {key }
                count = {this.state.counter} img = {img} id = {id} orderedItem = {orderedItem}
                itemCount = {itemCount}/>
    );
  }
}

export default connect((state) => ({
  selectedMenu : state.menuDataUI.get('selectedMenu'),
}),
(dispatch) => ({
  MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch)
}))(ItemContainer);