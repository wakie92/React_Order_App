import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import Backdrop from 'components/UI/Modal/Backdrop/Backdrop';
import Modal from 'components/UI/Modal/Modal';
import * as menuDataUIActions from 'store/modules/menuDataUI';
class ModalContainer extends Component {

  getCloseModal = () => {
    const {MenuDataUIActions} = this.props;
    MenuDataUIActions.modalShow(false);
    MenuDataUIActions.confirm(false);
    MenuDataUIActions.ol_mobile(false);
    MenuDataUIActions.backDraw(false);
  }

  finalConfirm = () => {
    const { MenuDataUIActions, req,  checkedTF, selectedMenu, totalPrice } = this.props;
    selectedMenu.map((item) => item.count++)
    MenuDataUIActions.postMenuAsync({ 
      os_req : req,
      os_paymentMethod : checkedTF,
      os_purchasingMenu : selectedMenu, 
      os_totalPrice : totalPrice
    });
    this.getCloseModal();
    this.getInitialize();
  }

  getInitialize = () => {
    const {MenuDataUIActions, selectedMenu} = this.props;
    let arr = [...selectedMenu];
    arr.length = 0;
    MenuDataUIActions.getMenuList();
    MenuDataUIActions.selectedMenu(arr);
    MenuDataUIActions.checkedTF({cash : false, card : false});
    MenuDataUIActions.requirement('');
    MenuDataUIActions.amountToPay('');
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.modalShow !== this.props.modalShow;
  }
  render() {
    console.log('[Modal_Containder] : render()')
    const {  getCloseModal , finalConfirm} = this;
    const {  modalShow, selectedMenu, req, checkedTF , totalPrice, amountToPay} = this.props;
    return (
      <>
        <Backdrop 
          show = {modalShow}
        />
        <Modal 
          show = {modalShow}
          closeModal = {getCloseModal}
          selectedMenu = {selectedMenu}
          req = {req}
          checkedTF = {checkedTF}
          finalConfirm = {finalConfirm}
          amountToPay = {amountToPay}
          totalPrice = {totalPrice}
        />
      </>
    );
  }
}

export default connect ((state) => ({
  modalShow : state.menuDataUI.get('modalShow'),
  selectedMenu : state.menuDataUI.get('selectedMenu'),
  req : state.menuDataUI.get('req'),
  checkedTF : state.menuDataUI.get('checkedTF'),
  amountToPay : state.menuDataUI.get('amountToPay'),
  totalPrice : state.menuDataUI.get('totalPrice'),
  orderSummary : state.menuDataUI.get('orderSummary')
}),
  (dispatch) => ({
    MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch)
  })
)(ModalContainer);