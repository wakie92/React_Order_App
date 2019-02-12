import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import Backdrop from 'components/UI/Modal/Backdrop/Backdrop';
import Modal from 'components/UI/Modal/Modal';
import * as menuDataActions from 'store/modules/menuData';
class ModalContainer extends Component {

  getCloseModal = () => {
    const {MenuDataActions} = this.props;
    MenuDataActions.modalShow(false);
  }

  finalConfirm = () => {
    const { MenuDataActions } = this.props;
  }

  render() {
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
  modalShow : state.menuData.get('modalShow'),
  selectedMenu : state.menuData.get('selectedMenu'),
  req : state.menuData.get('req'),
  checkedTF : state.menuData.get('checkedTF'),
  amountToPay : state.menuData.get('amountToPay'),
  totalPrice : state.menuData.get('totalPrice')
}),
  (dispatch) => ({
    MenuDataActions : bindActionCreators(menuDataActions,dispatch)
  })
)(ModalContainer);