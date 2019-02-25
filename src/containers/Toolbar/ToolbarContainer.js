import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators}  from 'redux';
import * as menuDataUIActions from 'store/modules/menuDataUI';
import Toolbar from 'components/Toolbar/Toolbar'
import Backdrop from 'components/UI/Modal/Backdrop/Backdrop';

class ToolbarContainer extends Component {

  
  handleModal = () =>{
    const {MenuDataUIActions} = this.props;
    MenuDataUIActions.toolbar(true);
  }

  render() {
    return (
      <>
        <Backdrop 
          show = {this.props.toolbar}
        />
        <Toolbar
          clicked = {this.handleModal}
        />
      </>
    );
  }
}

export default connect((state) => ({
  toolbar :  state.menuDataUI.get('toolbar')
}),
  (dispatch) => ({
    MenuDataUIActions : bindActionCreators(menuDataUIActions, dispatch)
})
)(ToolbarContainer);