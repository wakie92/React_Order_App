import React from 'react';
import classes from './Items.module.scss'
import ItemContainer from 'containers/Item/ItemContainer';
const items = ({menuList}) => {
  const items = menuList
    .map(menu => {
      return(
      <ItemContainer 
        menu = {menu}  
        key = {menu.id}
      />
      )
    })
  return (
    <>
      <div className = {classes.Items}>
        {items}
      </div>
    </>
  )
}

export default items;