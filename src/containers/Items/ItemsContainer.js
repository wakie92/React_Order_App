import React, {Component} from 'react';
import Items from 'components/Items/Items';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataUIActions from 'store/modules/menuDataUI';
import * as menuDataActions from 'store/modules/menuData';

class ItemsContainer extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    //성공
    return nextProps.controledMENU !== this.props.controledMENU;
  }
  render() {
    console.log('[ITEMS_CONTAINER] : render')
    const { show ,controledMENU} = this.props;
  return(
    <Items 
      show = {show} 
      menuList = {controledMENU} 
    />
  );
}
}

export default connect((state) => ({
  totalPrice : state.menuDataUI.get('totalPrice'),
  menuData : state.menuDataUI.get('menu'),
}),
(dispatch) => ({
  MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch),
  MenuDataActions : bindActionCreators(menuDataActions,dispatch)
}))(ItemsContainer)