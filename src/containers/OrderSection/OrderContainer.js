import React, { Component } from 'react';
import Order from 'components/Order/Order';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataUIActions from 'store/modules/menuDataUI';
import OrderListContainer from './OrderList/OrderListContainer';
class OrderContainer extends Component {
  state = {
    input : ''
  }
  confirmOrderHandler = () =>{
    const {MenuDataUIActions, checkedTF, selectedMenu, modalShow, amountToPay} = this.props;
    //immutable 속성인 selectedMenu
    //객체를 set한 후에는 prototype이 Array로변하는 것을 이용
    return selectedMenu.hasOwnProperty('_root') ? 
    alert('장바구니가 비어있습니다.') : (checkedTF['card'] && checkedTF['cash'] )=== false ?
    alert('결제수단을 선택해주세요') : checkedTF['cash'] && amountToPay === 'select' ? 
    alert('지불할 금액을 선택해주세요') : 
    import('components/UI/Modal/Modal').then(({default :  modalShow}) => {
      MenuDataUIActions.modalShow(true)
      MenuDataUIActions.requirement(this.state.req_comment)
    })
  }
  handlePayMethodChange = (e) => {
    const { MenuDataUIActions} = this.props;
    let checkedBtn = {}
    checkedBtn[e.target.value] = e.target.checked;
    MenuDataUIActions.checkedTF(checkedBtn)
  }
  handleRequirementChange = (e) => {
    const {MenuDataUIActions, req} = this.props;
    const { input }  = this.state;
    // console.log(this.state.req_comment);
    console.log(req)
    console.log(input);
    // MenuDataUIActions.requirement(e.target.value)
    this.setState({input : e.target.value})
    // this.setState({req_comment : e.target.value})
  }
  handleAmountToPay = (e) => {
    const {MenuDataUIActions} = this.props;
    MenuDataUIActions.amountToPay(e.target.value);
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
  shouldComponentUpdate (nextProps, nextState) {
    console.log(nextState);
    return nextProps.req !== nextState.input;
  }
  componentDidMount() {
    console.log('[ORDER_CONTAINER] : componentDidMount')
  }
  componentDidUpdate() {
    console.log('[ORDER_CONTAINER] : componentDidUpdate')
    console.log('--------------------------')
  }
  render() {
    console.log('--------------------------')
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
        // req = {req}
        req = {this.state.input}
        howMuchToPay = {handleAmountToPay}
        amountToPay = {amountToPay}
        toggleSelect = {handleSelect}
        countControl = {handleCount}
      >
        <OrderListContainer/>
      </Order>
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