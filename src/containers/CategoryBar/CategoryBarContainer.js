import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryBar from 'components/CategoryBar/CategoryBar';
import {
  Menu,
  Home,
  Login,
  Log
} from 'pages';
class CategoryBarContainer extends Component {
  handleMouseOver = (tg) => {
    tg.preload();
  };
  render() {
    const {toolbar} = this.props
    const {handleMouseOver} = this;
    return (
      <CategoryBar
        toolbar = {toolbar}
        onPreload = {handleMouseOver}
      />
    );
  }
}

export default  connect((state) => ({
  toolbar : state.menuDataUI.get('toolbar')
}))(CategoryBarContainer);