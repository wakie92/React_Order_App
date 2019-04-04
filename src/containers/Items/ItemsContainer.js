import React, {Component} from 'react';
import Items from 'components/Items/Items';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataUIActions from 'store/modules/menuDataUI';

class ItemsContainer extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   //성공
  //   return nextProps.controledMENU !== this.props.controledMENU;
  // }

  componentDidMount()  {
    const { MenuDataUIActions } = this.props;
    MenuDataUIActions.checkedTF({cash : false, card:false});
    MenuDataUIActions.getMenuList();
  }
  render() {
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
}))(ItemsContainer)