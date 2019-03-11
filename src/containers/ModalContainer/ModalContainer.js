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

  finalConfirm = async () => {
    const { MenuDataUIActions, req,  loginId,unLoginId ,checkedTF,isLogined, selectedMenu, totalPrice } = this.props;
    await selectedMenu.map((item) =>  {
        item.count++
        return MenuDataUIActions.counterUp(item.id, {count :item.count})
      })
    const userId = isLogined ? loginId : unLoginId;
    await MenuDataUIActions.postMenuAsync({ 
      os_req : req,
      os_paymentMethod : checkedTF,
      os_purchasingMenu : selectedMenu, 
      os_totalPrice : totalPrice,
      os_userId : userId
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
  orderSummary : state.menuDataUI.get('orderSummary'),
  loginId : state.loginData.getIn(['loginUser','id']),
  unLoginId : state.loginData.getIn(['unLoginUser', 'id']),
  isLogined : state.loginData.get('isLogined')
}),
  (dispatch) => ({
    MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch)
  })
)(ModalContainer);