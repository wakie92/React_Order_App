import React from 'react';
import classes from './OrderHistory.module.scss';

const HistoryLog = ({oh_time, oh_menu}) => {
  const oh_menu_list = oh_menu.map((data,idx) => {
    const { counter,  name, price }  = data;
    return(
      <div key = {idx} className = {classes.ItemInfo}>
        <div className = { classes.OHItem}>
          <span className = { classes.MenuName}> {name} </span>
        </div>
        <div className = { classes.Count }>
          <span> {counter} </span>
        </div>
        <div className = { classes.Price }>
          <span> { price * counter} 원  </span>
        </div>
        <div className = { classes.OrderTime }>
          <span> {oh_time} </span>
        </div>
      </div>
      
    )
  })
  return (
    <>
      <div className = {classes.OrderHistoryList}>
          {oh_menu_list}
      </div>
      <hr className =  {classes.OrderHistorDivLine}></hr>
    </>
  )
}


const orderHistory = ({Oh_List}) => {
  let oh_data = null;
  if(Oh_List) {
    oh_data = Oh_List.map((data,idx) => {
      const { os_req, os_paymentMethod, os_time, os_totalPrice, os_userId, selectedMenu }  = data;
      return (
        <HistoryLog
          oh_req = {os_req}
          oh_paymentMethod = {os_paymentMethod}
          oh_totalPrice = {os_totalPrice}
          oh_userid = {os_userId}
          oh_menu = {selectedMenu}
          oh_time = {os_time}
          key = {idx+os_userId}
        />
        )
    })
  } 
  return (
    <div className = { classes.Wrapper}>
      <div className = { classes.ContentsWrapper}>
        <span className = { classes.PayBill}> 주문내역 </span>
        <div className = {classes.HeaderSec}>
          <span className = {classes.Menu}> 메뉴 </span>
          <span className = {classes.Count}>  수량 </span>
          <span className = {classes.Price}> 단가 </span>
          <span className= {classes.OrderTime}> 주문시간 </span>
        </div>
        <hr className = { classes.DivLine }></hr>
        <div className = {classes.HistoryWrapper}> {oh_data} </div>
      </div>
    </div>
  )
}

export default orderHistory;