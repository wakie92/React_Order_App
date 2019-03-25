import React from 'react';
import classes from './Items.module.scss'
import ItemContainer from 'containers/Item/ItemContainer';
const items = (props) => {
  const menuList = props.menuList
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
        {menuList}
      </div>
    </>
  )
}

export default items;