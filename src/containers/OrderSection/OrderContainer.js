import React, { Component } from 'react';
import Order from 'components/Order/Order';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataActions from 'store/modules/menuData';

class OrderContainer extends Component {
  confirmOrderHandler = () =>{
    const {MenuDataActions,checkedTF,selectedMenu} = this.props;
    // console.log(selectedMenu.toJS().length === 0)
    // if(checkedTF['card'] === false && checkedTF['cash'] === false) {
    //   alert('결제수단을 선택해주세요');
    // }
    return selectedMenu.length === 0 ? 
    alert('장바구니가 비어있습니다.') : (checkedTF['card'] && checkedTF['cash'] )=== false ?
    alert('결제수단을 선택해주세요') : MenuDataActions.modalShow(true);
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