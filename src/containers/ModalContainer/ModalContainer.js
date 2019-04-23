import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import withCheckLogin from 'hoc/withCheckLogin';
import Backdrop from 'components/UI/Modal/Backdrop/Backdrop';
import Modal from 'components/UI/Modal/Modal';
import * as menuDataUIActions from 'store/modules/menuDataUI';
import * as loginDataActions from 'store/modules/loginData'

class ModalContainer extends Component {

  getCloseModal = () => {
    const { MenuDataUIActions } = this.props;
    MenuDataUIActions.modalShow(false);
    MenuDataUIActions.confirm(false);
    MenuDataUIActions.ol_mobile(false);
    MenuDataUIActions.backDraw(false);
  }

  finalConfirm =  () => {
    const { MenuDataUIActions,isLogined, req,unLoginedUser, loginId ,checkedTF, selectedMenu, totalPrice } = this.props;
    try {
      const userId =  isLogined ? loginId : unLoginedUser ;
      const orderTime = new Date();
      const os_time = [orderTime.getFullYear(), orderTime.getMonth()+1, orderTime.getDate()].join('-')
       selectedMenu.map((item) =>  {
        item.count++
        return MenuDataUIActions.counterUp(item.id, item.count)
      })
       MenuDataUIActions.postMenuAsync({ 
        os_req : req,
        os_paymentMethod : checkedTF,
        selectedMenu,
        os_totalPrice : totalPrice,
        os_userId : userId,
        os_time : os_time
      });
      this.getCloseModal();
      // this.getInitialize();
      MenuDataUIActions.getMenuList();
      MenuDataUIActions.amountToPay('');
    } catch(err) {
      console.log(err)
    }
    
  }

  // getInitialize = () => {
  //   const {MenuDataUIActions, selectedMenu} = this.props;
  //   let arr = [...selectedMenu];
  //   arr.length = 0;
  //   // let emp = ''
    // MenuDataUIActions.getMenuList();
    // MenuDataUIActions.selectedMenu(arr);
    // MenuDataUIActions.requirement(emp);
    // MenuDataUIActions.amountToPay(emp);
  //   MenuDataUIActions.checkedTF({card :null, cash : null});
  // }
  componentDidMount() {
    this.props.handleCheckLogin();
  }
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.modalShow !== this.props.modalShow;
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
  modalShow : state.menuDataUI.get('modalShow'),
  selectedMenu : state.menuDataUI.get('selectedMenu'),
  req : state.menuDataUI.get('req'),
  checkedTF : state.menuDataUI.get('checkedTF'),
  amountToPay : state.menuDataUI.get('amountToPay'),
  totalPrice : state.menuDataUI.get('totalPrice'),
  orderSummary : state.menuDataUI.get('orderSummary'),
  loginId : state.loginData.getIn(['loginUser','userId']),
  unLoginedUser : state.loginData.get('unLoginUser'),
  isLogined : state.loginData.get('isLogined'),
  userData : state.loginData.get('loginUser'),
}),
  (dispatch) => ({
    MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch),
    LoginDataActions : bindActionCreators(loginDataActions, dispatch)
  })
)(withCheckLogin(ModalContainer));