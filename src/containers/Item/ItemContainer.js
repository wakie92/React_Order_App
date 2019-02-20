import React, { Component } from 'react';
import Item from 'components/Items/Item/Item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataUIActions from 'store/modules/menuDataUI';

class ItemContainer extends Component {

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.menu.counter !== this.props.menu.counter;
  }
  render() {
    const {menu,orderedItem, itemCount } = this.props;
    const { name, price, key, counter, img , id }  = menu;
    console.log('[ITEMCONTAINER]',id)
    return (
        <Item name = {name} price = {price} key = {key }
                count = {counter} img = {img} id = {id} orderedItem = {orderedItem}
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