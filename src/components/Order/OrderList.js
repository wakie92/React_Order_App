import React from 'react';
import classes from './OrderList.module.scss';


const orderList = ({selectedMenu,toggleSelect}) => {
  const orderedItems = selectedMenu 
  .map(item=> {
  const selectedItem = item.selected ? 'SelectedOrderedItems' : ''
  return (
    <>
      <div  className = {`${classes.OrderedItems} ${classes[selectedItem]}`} 
            onClick = {(e) => {e.stopPropagation(); toggleSelect(item.id)}}
            key = {item.id}
            >
        <span className = {classes.OrderedItemName}>{item.name}</span>
        <span className = {classes.OrderedItemPrice}>취소</span>
        <span className = {classes.OrderedItemCount}>{item.counter}</span>
        <span className = {classes.OrderedItemTotalPrice}>{item.counter * item.price}</span>
      </div>
      <hr></hr>
    </>
      )
  }) 
  return (
    
      
    <div className = {classes.OrederdItemList }>{orderedItems}</div>
  )
}
export default orderList;