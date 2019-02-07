import React, { Component } from 'react';
import Order from 'components/Order/Order';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataActions from 'store/modules/menuData';

class OrderContainer extends Component {
  confirmOrderHandler = () =>{
    const {MenuDataActions, modalShow} = this.props;
    MenuDataActions.modalShow(modalShow);
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.selectedMenu !== nextProps.selectedMenu;
  // }
  handlePayMethodChange = (e) => {
    const { MenuDataActions} = this.props;
    let checkedBtn = {}
    checkedBtn[e.target.value] = e.target.checked;
    MenuDataActions.checkedTF(checkedBtn)
  }
  handleRequirementChange = (e) => {
    const {MenuDataActions} = this.props;
    MenuDataActions.requirement(e.target.value);
  }
  componentDidMount() {
    console.log('[ORDER_CONTAINER] : componentDidMount')
  }
  componentDidUpdate() {
    console.log('[ORDER_CONTAINER] : componentDidUpdate')
  }
  // shouldComponentUpdate
  render() {
    console.log('[ORDER_CONTAINER] : render')
    const { totalPrice , selectedMenu  , checkedTF, req} = this.props;
    const { confirmOrderHandler, handlePayMethodChange ,handleRequirementChange} = this;
    return (
      <Order
        ConfirmOrder = {confirmOrderHandler}
        totalPrice = {totalPrice}
        selectedMenu = {selectedMenu}
        checkedButton = {handlePayMethodChange}
        requirement = {handleRequirementChange}
        checkedTF = {checkedTF}
        req = {req}
      />
    );
  }
}

export default connect((state) => ({
  selectedMenu : state.menuData.get('selectedMenu'),
  totalPrice : state.menuData.get('totalPrice'),
  checkedTF : state.menuData.get('checkedTF'),
  req : state.menuData.get('req'),
  modalShow : state.menuData.get('modalShow')

}),
(dispatch) =>({
  MenuDataActions : bindActionCreators(menuDataActions,dispatch)
}))(OrderContainer);