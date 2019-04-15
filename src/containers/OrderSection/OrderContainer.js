import React, { Component } from 'react';
import Order from 'components/Order/Order';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataUIActions from 'store/modules/menuDataUI';
import OrderListContainer from './OrderList/OrderListContainer';
import OrderRequirement from 'components/Order/OrderRequirement';

class OrderContainer extends Component {

  confirmOrderHandler = () =>{
    const {MenuDataUIActions, selectedMenu, amountToPay} = this.props;
    //immutable 속성인 selectedMenu
    //객체를 set한 후에는 prototype이 Array로변하는 것을 이용
    return selectedMenu.hasOwnProperty('_root') ? 
    alert('장바구니가 비어있습니다.') : amountToPay === '' 
    ? alert('지불할 금액과 방법을 선택해주세요') :
    import('components/UI/Modal/Modal').then(({default :  modalShow}) => {
      this.closeOrderListMobile()
      MenuDataUIActions.confirm(true)
    }).then(() => {
      MenuDataUIActions.modalShow(true)
    })
  }
  handlePayMethodChange = (e) => {
    const { MenuDataUIActions} = this.props;
    let checkedBtn = {};
    checkedBtn[e.target.value] = e.target.checked;
    MenuDataUIActions.checkedTF(checkedBtn)
  }
 
  handleAmountToPay = (e) => {
    const {MenuDataUIActions} = this.props;
    MenuDataUIActions.amountToPay(e.target.value);
  }

  closeOrderListMobile = () => {
    const {MenuDataUIActions, } = this.props;
    MenuDataUIActions.backDraw(false) 
    MenuDataUIActions.ol_mobile(false)
  }
  shouldComponentUpdate(nextProps, nextState) {
    //성공
    return nextProps.confirm !== this.props.confirm 
        || nextProps.totalPrice !== this.props.totalPrice
        || nextProps.checkedTF !== this.props.checkedTF
        || nextProps.ol_mobile !== this.props.ol_mobile
        || nextProps.amoutToPay !== this.props.amountToPay
  } 
  render() {
    const { totalPrice, selectedMenu ,ol_mobile , checkedTF, amountToPay} = this.props;
    const { confirmOrderHandler, closeOrderListMobile, handleSelect, 
            handlePayMethodChange ,handleRequirementChange, handleAmountToPay } = this;
    return (
      <Order
        ConfirmOrder = {confirmOrderHandler}
        totalPrice = {totalPrice}
        selectedMenu = {selectedMenu}
        checkedButton = {handlePayMethodChange}
        requirement = {handleRequirementChange}
        checkedTF = {checkedTF}
        howMuchToPay = {handleAmountToPay}
        amountToPay = {amountToPay}
        toggleSelect = {handleSelect}
        orderMobileV = {ol_mobile}
        closeOrderMobile = {closeOrderListMobile}
      >
        <OrderRequirement/>
        <OrderListContainer/>
      </Order>
    );
  }
}

export default connect((state) => ({
  selectedMenu : state.menuDataUI.get('selectedMenu'),
  totalPrice : state.menuDataUI.get('totalPrice'),
  checkedTF : state.menuDataUI.get('checkedTF'),
  req : state.menuDataUI.get('req'),
  modalShow : state.menuDataUI.get('modalShow'),
  amountToPay : state.menuDataUI.get('amountToPay'),
  selectedItem : state.menuDataUI.get('selectedItem'),
  confirm : state.menuDataUI.get('confirm'),
  ol_mobile : state.menuDataUI.get('ol_mobile'),
}),
(dispatch) =>({
  MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch)
}))(OrderContainer);