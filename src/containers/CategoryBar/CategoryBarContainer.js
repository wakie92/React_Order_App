import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryBar from 'components/CategoryBar/CategoryBar';
class CategoryBarContainer extends Component {
  render() {
    const {toolbar} = this.props
    return (
      <CategoryBar
        toolbar = {toolbar}
      />
    );
  }
}

export default  connect((state) => ({
  toolbar : state.menuDataUI.get('toolbar')
}))(CategoryBarContainer);