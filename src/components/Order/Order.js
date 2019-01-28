import React from 'react';
import classes from './Order.module.scss'
import Button from 'components/UI/Button/Button';

const order = (props) => {
  return (
    <>
      <div className = {classes.Order}>
        <div className = {classes.OrderList}>
          <div className = {classes.OrderColumn}>
            <span className = {classes.OrderedItemName}>상품명</span>
            <span className = {classes.OrderedItemPrice}>판매금액</span>
            <span className = {classes.OrderedItemCount}>수량</span>
            <span className = {classes.OrderedItemTotalPrice}>최종금액</span>
          </div>
          <div className = {classes.OrderedItems}>
          
          </div>
        </div>
        <div className = {classes.PayMethod}>
          <span className = {classes.PaymentTitle}>상품판매 결제 선택하기</span>
          <div className = {classes.RadioBtn}>
            <form>
              <input type = "radio" value = "cash" name = "cash"/> 선불(현금)<br/>
              <input type = "radio" value = "card" name = "card"/> 카드
            </form>
          </div>
          <div className = {classes.Required}>
            <select>
              <option value = "">----------------</option>
              <option value = "10000">10000원</option>
              <option value = "15000">15000원</option>
              <option value = "20000">20000원</option>
              <option value = "10000">금액에 맞게</option>
            </select>
            <textarea 
              className = {classes.ReValue} 
              rows = "6"
              value = "required" 
              placeholder = "요청사항" />
          </div>
        </div>
        <div className = {classes.Payment}>
          <div className = {classes.TotalPrice}><span>{props.totalPrice}원</span></div>
          <Button btnType = "ConfirmOrder" clicked = {props.ConfirmOrder}>결제</Button>
        </div>
      </div>
    </>
  )
}

export default order;