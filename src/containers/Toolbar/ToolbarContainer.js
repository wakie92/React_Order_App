import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators}  from 'redux';
import * as menuDataUIActions from 'store/modules/menuDataUI';
import Toolbar from 'components/Toolbar/Toolbar'
import Backdrop from 'components/UI/Modal/Backdrop/Backdrop';
import withClass from 'hoc/withClass';

class ToolbarContainer extends Component {

  
  openCategory = () =>{
    const {MenuDataUIActions, toolbar} = this.props;
    if(toolbar === false) { 
      MenuDataUIActions.backDraw(true) 
      MenuDataUIActions.toolbar(true)
    }
    else if( toolbar === true ) { 
      MenuDataUIActions.backDraw(false) 
      MenuDataUIActions.toolbar(false)
    }
  }
  closeOrderListMobile = () => {
    const {MenuDataUIActions, } = this.props;
    MenuDataUIActions.backDraw(false) 
    MenuDataUIActions.ol_mobile(false)
  }
  openOrderListMobile = () => {
    const {MenuDataUIActions, ol_mobile, } = this.props;
    if(ol_mobile === false) { 
      MenuDataUIActions.backDraw(true) 
      MenuDataUIActions.ol_mobile(true)
    }
    else if( ol_mobile === true ) { 
      this.closeOrderListMobile();
    }
  }
  render() {
    const { openOrderListMobile, openCategory, closeOrderListMobile} = this;
    const { backDraw } = this.props
    return (
      <>
        <Backdrop 
          show = {backDraw}
          close = {closeOrderListMobile}
        />
        <Toolbar
          openCategory = {openCategory}
          openOrderListMobile = {openOrderListMobile}
        />
      </>
    );
  }
}

export default connect((state) => ({
  toolbar :  state.menuDataUI.get('toolbar'),
  ol_mobile : state.menuDataUI.get('ol_mobile'),
  backDraw : state.menuDataUI.get('backDraw')
}),
  (dispatch) => ({
    MenuDataUIActions : bindActionCreators(menuDataUIActions, dispatch)
})
)(ToolbarContainer);