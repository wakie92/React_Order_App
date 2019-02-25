import React, { Component } from 'react';
import Item from 'components/Items/Item/Item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataUIActions from 'store/modules/menuDataUI';
import withClass from 'hoc/withClass';
class ItemContainer extends Component {

  
  shouldComponentUpdate (nextProps, nextState) {
    //성공
    //다시한번 봐보기 
    return this.props.counter !== nextProps.counter;
  }
  render() {
    const {menu, orderedItemHandler, itemCountHandler ,counter} = this.props;
    const { name, price, img , id }  = menu;
    console.log('[ITEMCONTAINER]',id)
    return (
        <Item 
          name = {name} 
          price = {price} 
          key = {name}
          count = {counter} 
          img = {img} 
          id = {id} 
          itemCount = {itemCountHandler} 
          orderedItem = {orderedItemHandler}
        />
    );
  }
}

export default connect((state) => ({
  selectedMenu : state.menuDataUI.get('selectedMenu'),
  totalPrice : state.menuDataUI.get('totalPrice')
}),
(dispatch) => ({
  MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch)
}))(withClass(ItemContainer))