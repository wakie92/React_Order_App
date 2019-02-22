import React from 'react';
import classes from './OrderList.module.scss';


const orderList = (props) => {
  const orderedItems = props.selectedMenu 
  .map(item=> {
    console.log(item.key)
  const selectedItem = item.selected ? 'SelectedOrderedItems' : ''
  return (
      <div className = {`${classes.OrderedItems} ${classes[selectedItem]}`} onClick = {(e) => {e.stopPropagation(); props.toggleSelect(item.id)}}>
        <span className = {classes.OrderedItemName}>{item.name}</span>
        <span className = {classes.OrderedItemPrice}>{item.price}</span>
        <span className = {classes.OrderedItemCount}>{item.counter}</span>
        <span className = {classes.OrderedItemTotalPrice}>{item.counter * item.price}</span>
      </div>
      )
  }) 
  return (
    
      
    <div className = {classes.OrederdItemList }>{orderedItems}</div>
  )
}
export default orderList;