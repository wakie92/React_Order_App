import React, { Component } from 'react';
import Order from 'components/Order/Order';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataUIActions from 'store/modules/menuDataUI';
import withClass from 'hoc/withClass';

class OrderContainer extends Component {
  state = {
    selectedItem : null
  }
  confirmOrderHandler = () =>{
    const {MenuDataUIActions, checkedTF, selectedMenu, amountToPay} = this.props;
    //immutable 속성인 selectedMenu
    //객체를 set한 후에는 prototype이 Array로변하는 것을 이용
    return selectedMenu.hasOwnProperty('_root') ? 
    alert('장바구니가 비어있습니다.') : (checkedTF['card'] && checkedTF['cash'] )=== false ?
    alert('결제수단을 선택해주세요') : checkedTF['cash'] && amountToPay === 'select' ? 
    alert('지불할 금액을 선택해주세요') : MenuDataUIActions.modalShow(true)
  }
  handlePayMethodChange = (e) => {
    const { MenuDataUIActions} = this.props;
    let checkedBtn = {}
    checkedBtn[e.target.value] = e.target.checked;
    MenuDataUIActions.checkedTF(checkedBtn)
  }
  handleRequirementChange = (e) => {
    const {MenuDataUIActions} = this.props;
    MenuDataUIActions.requirement(e.target.value);
  }
  handleAmountToPay = (e) => {
    const {MenuDataUIActions} = this.props;
    MenuDataUIActions.amountToPay(e.target.value);
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

  handleCount = (sign) => {
    const { MenuDataUIActions, selectedMenu,  } = this.props;
    let { totalPrice }  = this.props;
    const { selectedItem } = this.state;
    let arr = [...selectedMenu];
    const index = arr.findIndex(item => item.id === selectedItem.id);
    switch(sign) {
      case  '+' :  
        selectedItem.counter++;
        arr = [
          ...arr.slice(0,index),
          selectedItem,
          ...arr.slice(index+1,arr.length)
              ]
        MenuDataUIActions.selectedMenu(arr);
      break;
      case '-' :
        totalPrice -= selectedItem.price;
        MenuDataUIActions.totalPrice(totalPrice);
        if(selectedItem.counter === 1 ) {
          arr.splice(index,1);
          MenuDataUIActions.selectedMenu(arr);
        }else {
          selectedItem.counter--;
          arr = [
            ...arr.slice(0,index),
            selectedItem,
            ...arr.slice(index+1,arr.length)
                ]
          MenuDataUIActions.selectedMenu(arr);
        }
      break;
      default : 
      break;
    }
    
  }

  componentDidMount() {
    console.log('[ORDER_CONTAINER] : componentDidMount')
  }
  componentDidUpdate() {
    console.log('[ORDER_CONTAINER] : componentDidUpdate')
  }
  render() {
    console.log('[ORDER_CONTAINER] : render')
    const { totalPrice , selectedMenu  , checkedTF, req, amountToPay} = this.props;
    const { confirmOrderHandler, handleSelect, handleCount, handlePayMethodChange ,handleRequirementChange, handleAmountToPay } = this;
    console.log('totalPrice : ' , totalPrice);
    return (
      <Order
        ConfirmOrder = {confirmOrderHandler}
        totalPrice = {totalPrice}
        selectedMenu = {selectedMenu}
        checkedButton = {handlePayMethodChange}
        requirement = {handleRequirementChange}
        checkedTF = {checkedTF}
        req = {req}
        howMuchToPay = {handleAmountToPay}
        amountToPay = {amountToPay}
        toggleSelect = {handleSelect}
        countControl = {handleCount}
      />
    );
  }
}

export default connect((state) => ({
  selectedMenu : state.menuDataUI.get('selectedMenu'),
  totalPrice : state.menuDataUI.get('totalPrice'),
  checkedTF : state.menuDataUI.get('checkedTF'),
  req : state.menuDataUI.get('req'),
  modalShow : state.menuDataUI.get('modalShow'),
  amountToPay : state.menuDataUI.get('amountToPay'),
  menuList : state.menuDataUI.get('menu')
}),
(dispatch) =>({
  MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch)
}))(OrderContainer);