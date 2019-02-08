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

  render() {
    const {  getCloseModal} = this;
    const {  modalShow} = this.props;
    return (
      <>
        <Backdrop 
          show = {modalShow}
        />
        <Modal 
          show = {modalShow}
          closeModal = {getCloseModal}
        />
      </>
    );
  }
}

export default connect ((state) => ({
  modalShow : state.menuData.get('modalShow')
}),
  (dispatch) => ({
    MenuDataActions : bindActionCreators(menuDataActions,dispatch)
  })
)(ModalContainer);