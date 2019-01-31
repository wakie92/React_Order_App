import React from 'react';
import classes from './Items.module.scss'
import ItemContainer from 'containers/Item/ItemContainer';


const items = (props) => {
  const menuList = props.menuList
    .map(menu => {
      return props.show ?  
                <ItemContainer menu = {menu} orderedItem = {props.orderedItem}
                itemCount = {props.itemCount}/>
                // <ItemContainer name = {menu.name} price = {menu.price} key = {menu.id}
                // count = {menu.counter} img = {menu.img} id = {menu.id} orderedItem = {props.orderedItem}
                // itemCount = {props.itemCount}/>
                : null
    })
  return (
    <div className = {classes.Items}>
      {menuList}
    </div>
  )
}

export default items;