import React, {Component} from 'react';
import Items from 'components/Items/Items';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataUIActions from 'store/modules/menuDataUI';
import * as menuDataActions from 'store/modules/menuData';

class ItemsContainer extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   //성공
  //   return nextProps.controledMENU !== this.props.controledMENU;
  // }

  componentDidMount()  {
    const { MenuDataUIActions } = this.props;
    console.log('didmount')
    MenuDataUIActions.checkedTF({cash : false, card:false});
    MenuDataUIActions.getMenuList();
  }
  render() {
    console.log('[ITEMS_CONTAINER] : render')
    console.log(this.props)
    // const {controledMENU} = this.props;
    const { menuData } = this.props;
    let controledMENU = [...menuData];
  return(
    <Items 
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