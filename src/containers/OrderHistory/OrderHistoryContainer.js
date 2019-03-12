import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrderHistory from 'components/OrderHistory'


class OrderHistoryContainer extends Component {


  render() {
    return (
      <OrderHistory/>
    );
  }
}

export default connect((state) => ({

}),
  (dispatch) => ({

}))(OrderHistoryContainer);