import React,{Fragment} from 'react';
import classes from './OrderList.module.scss';


const orderList = ({selectedMenu,deleteItem}) => {
  
  const orderedItems = selectedMenu 
  .map((item, idx)=> {
    let key = '';
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 5; i++ )
        key += possible.charAt(Math.floor(Math.random() * possible.length));
    return (
      <Fragment key = {key}>
        <div  className = {classes.OrderedItems} >
          <span className = {classes.OrderedItemName}>{item.name}</span>
          <div className = {classes.OrderedItemPrice}> 
            <span className = {classes.Deleted} onClick = {(e) => {e.stopPropagation(); deleteItem(idx)}} >취소</span></div>
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