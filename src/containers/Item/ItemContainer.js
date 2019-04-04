import React, { Component } from 'react';
import Item from 'components/Items/Item/Item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataUIActions from 'store/modules/menuDataUI';
import withClass from 'hoc/withClass';
class ItemContainer extends Component {

  
  shouldComponentUpdate (nextProps, nextState) {
    return this.props.counter !== nextProps.counter;
  }
  render() {
    const {menu, orderedItemHandler, itemCountHandler , userId,counter} = this.props;
    const { name, price, img , id }  = menu;
    return (
        <Item 
          name = {name} 
          price = {price} 
          key = {name}
          count = {counter} 
          img = {img} 
          id = {id} 
          userId = {userId}
          itemCount = {itemCountHandler} 
          orderedItem = {orderedItemHandler}
        />
    );
  }
}

export default connect((state) => ({
  selectedMenu : state.menuDataUI.get('selectedMenu'),
  totalPrice : state.menuDataUI.get('totalPrice'),
  userId : state.loginData.getIn(['loginUser','id'])
}),
(dispatch) => ({
  MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch)
}))(withClass(ItemContainer))