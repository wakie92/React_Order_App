import React,{Fragment} from 'react';
import classes from './OrderList.module.scss';


const orderList = ({selectedMenu,deleteItem}) => {
  const orderedItems = selectedMenu 
  .map((item, idx)=> {
  return (
    <Fragment key = {item.name + item.id}>
      <div  className = {classes.OrderedItems} >
        <span className = {classes.OrderedItemName}>{item.name}</span>
        <span className = {classes.OrderedItemPrice} 
              onClick = {(e) => {e.stopPropagation(); deleteItem(idx)}} >취소</span>
        <span className = {classes.OrderedItemCount}>{item.counter}</span>
        <span className = {classes.OrderedItemTotalPrice}>{item.counter * item.price}원</span>
      </div>
      <hr/>
    </Fragment>
      )
  }) 
  return (
    <div className = {classes.OrederdItemList } >{orderedItems}</div>
  )
}
export default orderList;