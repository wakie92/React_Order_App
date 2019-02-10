import React, { Component } from 'react';
import Order from 'components/Order/Order';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataActions from 'store/modules/menuData';

class OrderContainer extends Component {
  confirmOrderHandler = () =>{
    const {MenuDataActions, checkedTF, selectedMenu, amountToPay} = this.props;
    //immutable 속성인 selectedMenu
    //객체를 set한 후에는 prototype이 Array로변하는 것을 이용
    return selectedMenu.hasOwnProperty('_root') ? 
    alert('장바구니가 비어있습니다.') : (checkedTF['card'] && checkedTF['cash'] )=== false ?
    alert('결제수단을 선택해주세요') : checkedTF['cash'] && amountToPay === 'select' ? 
    alert('지불할 금액을 선택해주세요') : MenuDataActions.modalShow(true)
  }
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
  handleAmountToPay = (e) => {
    const {MenuDataActions} = this.props;
    console.log(e.target.value);
    MenuDataActions.amountToPay(e.target.value)
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
    const { totalPrice , selectedMenu  , checkedTF, req, amountToPay} = this.props;
    const { confirmOrderHandler, handlePayMethodChange ,handleRequirementChange, handleAmountToPay } = this;
    return (
      <Order
        ConfirmOrder = {confirmOrderHandler}
        totalPrice = {totalPrice}
        selectedMenu = {selectedMenu}
        checkedButton = {handlePayMethodChange}
        requirement = {handleRequirementChange}
        checkedTF = {checkedTF}
        req = {req}
        howMuchToPay = {handleAmountToPay}
        amountToPay = {amountToPay}
      />
    );
  }
}

export default connect((state) => ({
  selectedMenu : state.menuData.get('selectedMenu'),
  totalPrice : state.menuData.get('totalPrice'),
  checkedTF : state.menuData.get('checkedTF'),
  req : state.menuData.get('req'),
  modalShow : state.menuData.get('modalShow'),
  amountToPay : state.menuData.get('amountToPay')
}),
(dispatch) =>({
  MenuDataActions : bindActionCreators(menuDataActions,dispatch)
}))(OrderContainer);