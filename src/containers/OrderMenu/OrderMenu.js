import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CategoryBar from 'components/CategoryBar/CategoryBar'
import ItemsContainer from 'containers/Items/ItemsContainer';
import * as menuDataUIActions from 'store/modules/menuDataUI';
import OrderContainer from '../OrderSection/OrderContainer';
import ModalContainer from 'containers/ModalContainer/ModalContainer'
class OrderMenu extends Component {
  
 
  categoryBarHandler = () => {
    const { MenuDataUIActions, show } = this.props;
    !show ? MenuDataUIActions.showTF(true) :MenuDataUIActions.showTF(false)
  }

  componentDidMount()  {
    const { MenuDataUIActions } = this.props;
    console.log('[ORDER_MENU] : componentDidMount')
    MenuDataUIActions.checkedTF({cash : false, card:false});
    MenuDataUIActions.getMenuList();
    MenuDataUIActions.showTF(true);
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
  MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch)
})
)(OrderMenu);