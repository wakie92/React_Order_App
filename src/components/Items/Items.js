import React from 'react';
import classes from './Items.module.scss'
import Item from 'components/Items/Item/Item';


const items = (props) => {
  const menuList = props.menuList
    .map(menu => {
      return props.show ?  
                <Item name = {menu.name} price = {menu.price} key = {menu.id}
                count = {menu.counter} img = {menu.img} id = {menu.id} orderedItem = {props.orderedItem}
                itemCount = {props.itemCount} />
                : null
    })
  return (
    <div className = {classes.Items}>
      {menuList}
    </div>
  )
}

export default items;