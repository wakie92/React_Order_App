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
    if(toolbar === false){ MenuDataUIActions.toolbar(true) }
    else if( toolbar === true ) { MenuDataUIActions.toolbar(false) }

  }

  closeCategory = () => {
    const {MenuDataUIActions} = this.props;
    MenuDataUIActions.toolbar(false);
  }
  render() {
    return (
      <>
        <Backdrop 
          show = {this.props.toolbar}
        />
        <Toolbar
          clicked = {this.openCategory}
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
)(withClass(ToolbarContainer));