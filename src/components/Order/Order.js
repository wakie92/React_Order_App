import React from 'react';
import classes from './Order.module.scss'
import Button from 'components/UI/Button/Button';
import Plus from 'react-icons/lib/ti/plus';
import Minus from 'react-icons/lib/ti/minus';
import OrderListContainer from 'containers/OrderSection/OrderList/OrderListContainer'
import OrderRequirement from 'components/Order/OrderRequirement';
import Footer from 'components/UI/Footer/Footer'
const order = (props) => {
  
  return (
    <>
      <div className = {classes.Order}>
        <div className = {classes.OrderList}>
          <div className = {classes.OrderColumn}>
            <div className = {classes.OrderColumnTop}>
              <span>상품 주문 목록</span>
            </div>
            <div className = {classes.OrderAddMinus}>
              <span><Plus onClick = {(e) => {e.stopPropagation(); props.countControl('+')}}/> 
                    <Minus onClick = {(e) => {e.stopPropagation(); props.countControl('-')}}/></span>
            </div>
            <span className = {classes.ListItemName}>상품명</span>
            <span className = {classes.ListItemPrice}>판매금액</span>
            <span className = {classes.ListItemCount}>수량</span>
            <span className = {classes.ListItemTotalPrice}>최종금액</span>
          </div>
          <OrderListContainer/>
          {/* <div className = {classes.OrederdItemList}>{orderedItems}</div> */}
        </div>
        <div className = {classes.PayMethod}>
          <span className = {classes.PaymentTitle}>상품판매 결제 선택하기</span>
          <div className = {classes.RadioBtn}>
            <input 
              type = "radio" 
              value = "cash" 
              name = "cash" 
              checked = {props.checkedTF['cash']} 
              onChange = {props.checkedButton}
              /> 선불(현금)<br/>
            <input 
              type = "radio" 
              value = "card" 
              name = "card" 
              checked = {props.checkedTF['card']} 
              onChange = {props.checkedButton}/> 카드
          </div>
          
          <div className = {classes.Required}>
          {
            props.checkedTF['card'] ? <>
            <select style = {{display : 'none'}}>
              <option value = "">----------------</option>
              <option value = "10000">10000원</option>
              <option value = "15000">15000원</option>
              <option value = "20000">20000원</option>
              <option value = "10000">금액에 맞게</option>
            </select>
           
           </>    :
            <>
              <select onChange = {props.howMuchToPay} value = {props.amountToPay}>
                <option value = "select">----------------</option>
                <option value = "10000">10000원</option>
                <option value = "15000">15000원</option>
                <option value = "20000">20000원</option>
                <option value = {props.totalPrice}>금액에 맞게</option>
              </select>
              
             </>   
          }
          <OrderRequirement/>
          </div>
        </div>
        <div className = {classes.Payment}>
          <div className = {classes.TotalPrice}><span>{props.totalPrice}원</span></div>
          <Button btnType = "ConfirmOrder" clicked = {props.ConfirmOrder}>결제</Button>
        </div>
      </div>
      <Footer className = {classes.Footer}/>
    </>
  )
}

export default order;