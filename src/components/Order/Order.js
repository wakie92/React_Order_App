import React from 'react';
import classes from './Order.module.scss'
import Button from 'components/UI/Button/Button';

const order = (props) => {
  const orderedItems = props.selectedMenu 
    .map(item=> {
      return (
        <div className = {classes.OrderedItems}>
          <span className = {classes.OrderedItemName}>{item.name}</span>
          <span className = {classes.OrderedItemPrice}>{item.price}</span>
          <span className = {classes.OrderedItemCount}>{item.counter}</span>
          <span className = {classes.OrderedItemTotalPrice}>{item.counter * item.price}</span>
        </div>
        )
    })
  return (
    <>
      <div className = {classes.Order}>
        <div className = {classes.OrderList}>
          <div className = {classes.OrderColumn}>
            <span className = {classes.ListItemName}>상품명</span>
            <span className = {classes.ListItemPrice}>판매금액</span>
            <span className = {classes.ListItemCount}>수량</span>
            <span className = {classes.ListItemTotalPrice}>최종금액</span>
          </div>
          <div className = {classes.OrederdItemList}>{orderedItems}</div>
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
            <textarea 
              style = {{margin : '7px 0'}}
              className = {classes.ReValue} 
              rows = "7"
              value = "required" 
              placeholder = "요청사항" />
           </>    :
            <>
              <select>
                <option value = "">----------------</option>
                <option value = "10000">10000원</option>
                <option value = "15000">15000원</option>
                <option value = "20000">20000원</option>
                <option value = "10000">금액에 맞게</option>
              </select>
              <textarea 
                className = {classes.ReValue} 
                onChange = {props.requirement}
                rows = "6"
                value = {props.req} 
                placeholder = "요청사항" />
             </>   
          }
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