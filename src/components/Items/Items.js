import React from 'react';
import classes from './Items.module.scss'
import ItemContainer from 'containers/Item/ItemContainer';
import { Route } from 'react-router-dom';
// import { 
//   Menu,
//   Home
// } from 'pages';
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
      {/* <Route exact path = '/' component = {Home}/>
      <Route exact path = '/menu' component = {Menu}/>  */}
      <div className = {classes.Items}>
        {menuList}
      </div>
    </>
  )
}

export default items;