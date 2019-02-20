import React, { Component } from 'react';
import OrderList from 'components/Order/OrderList'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as menuDataUIActions from 'store/modules/menuDataUI';
class OrderListContainer extends Component {
  state = {
    selectedItem : null,
  }
  handleSelect = (id) => {
    const { MenuDataUIActions, selectedMenu } = this.props;
    let { selectedItem } = this.state;
    let arr = [...selectedMenu];
    const index = arr.findIndex(item => item.id === id);
    arr.map(item => {
      return item.id === id ? item.selected = true : item.selected = false
    })
    selectedItem = arr[index];
    this.setState({selectedItem : selectedItem});
    MenuDataUIActions.selectedMenu(arr);
  }
  // componentWillMount() {
  //   this.props.MenuDataUIActions.selectedItem()
  // }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.selectedMenu !== this.props.selectedMenu;
  }
  render() {
    const { selectedMenu }  = this.props;
    const { handleSelect }  = this;
    return (
      <OrderList 
        toggleSelect = {handleSelect}
        selectedMenu = {selectedMenu}
      />
    );
  }
}

export default connect((state) => ({
  selectedMenu : state.menuDataUI.get('selectedMenu')
}),
(dispatch) => ({
  MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch)
})
)(OrderListContainer);