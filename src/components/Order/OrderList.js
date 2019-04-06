import React from 'react';
import classes from './OrderList.module.scss';


const orderList = ({selectedMenu,deleteItem}) => {
  
  const orderedItems = selectedMenu 
  .map((item, idx)=> {
  return (
    <>
      <div  className = {classes.OrderedItems} key = {item.id + idx}>
        <span className = {classes.OrderedItemName}>{item.name}</span>
        <span className = {classes.OrderedItemPrice} 
              onClick = {(e) => {e.stopPropagation(); deleteItem(item.id)}} >취소</span>
        <span className = {classes.OrderedItemCount}>{item.counter}</span>
        <span className = {classes.OrderedItemTotalPrice}>{item.counter * item.price}원</span>
      </div>
      <hr/>
    </>
      )
  }) 
  return (
    <div className = {classes.OrederdItemList } >{orderedItems}</div>
  )
}
export default orderList;