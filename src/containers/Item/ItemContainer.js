import React, { Component } from 'react';
import Item from 'components/Items/Item/Item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataUIActions from 'store/modules/menuDataUI';

class ItemContainer extends Component {


  render() {
    const {menu,orderedItem, itemCount } = this.props;
    const { name, price, key, counter, img , id }  = menu;
    return (
        <Item name = {name} price = {price} key = {key }
                count = {counter} img = {img} id = {id} orderedItem = {orderedItem}
                itemCount = {itemCount}/>
    );
  }
}

export default connect((state) => ({
  selectedMenu : state.menuData.get('selectedMenu'),
}),
(dispatch) => ({
  MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch)
}))(ItemContainer);