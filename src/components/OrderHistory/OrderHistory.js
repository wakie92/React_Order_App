import React from 'react';
import classes from './OrderHistory.module.scss';


const orderHistory_menu = (data) => {
  const a = data.map((foo) => {
    console.log(foo);
    return 
  })
}



const orderHistory = ({Oh_List, listName}) => {
  let list = null;
  let test = [];
  let oh_menuList = [];
  if(Oh_List) {
    list  = Object.getOwnPropertyNames(Oh_List);
    for(var i = 0 ; i< list.length; i++) {
      test.push(Oh_List[list[i]]);
      oh_menuList.push(Oh_List[list[i]])
    }
  }
  console.log(oh_menuList);
  orderHistory_menu(oh_menuList)
  test.map((data) => {
    return (
      <div>
        {data.totalPrice}
        {data.os_req}
      </div>
    )
  })
  return (
    <div>
      {test}
    </div>
  )
}

export default orderHistory;