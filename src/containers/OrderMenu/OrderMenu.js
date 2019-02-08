import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CategoryBar from 'components/CategoryBar/CategoryBar'
import ItemsContainer from 'containers/Items/ItemsContainer';
import * as menuDataActions from 'store/modules/menuData';
import OrderContainer from '../OrderSection/OrderContainer';
import ModalContainer from 'containers/ModalContainer/ModalContainer'
class OrderMenu extends Component {
  
 
  categoryBarHandler = () => {
    const { MenuDataActions, show } = this.props;
    !show ? MenuDataActions.showTF(true) :MenuDataActions.showTF(false)
  }

  componentDidMount() {
    const { MenuDataActions } = this.props;
    console.log('[ORDER_MENU] : componentDidMount')
    MenuDataActions.checkedTF({cash : false, card:false});
    MenuDataActions.getMenuList();
    MenuDataActions.showTF(true);
  }
  componentDidUpdate() {
    console.log('[ORDER_MENU] : componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('[ORDER_MENU] : componentWillUnMount')
    
  }
  render() {
    const { categoryBarHandler, } = this;
    const { menuData, show, } = this.props;
    console.log('[ORDER_MENU] : render')
    return(
      <>
        <ModalContainer/>
        <CategoryBar  showAll = {categoryBarHandler}/>
        <ItemsContainer 
          show = {show} 
          controledMENU = {menuData} 
        />
        <OrderContainer/>
      </>
    );
  }
}

export default connect((state) => ({
  menuData : state.menuData.get('menu'),
  show : state.menuData.get('show'),
  modalShow : state.menuData.get('modalShow')
}),
(dispatch) => ({
  MenuDataActions : bindActionCreators(menuDataActions,dispatch)
})
)(OrderMenu);