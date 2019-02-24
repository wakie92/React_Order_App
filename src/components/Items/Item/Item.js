import React from 'react';
import classes from './Item.module.scss';
import Button from 'components/UI/Button/Button';
import ShoppingCart from 'react-icons/lib/md/shopping-cart';
const item = (props) => {
  return (
    <div className = {classes.Item}>
      <div className = {classes.MenuName}>{props.name}</div>
      <div className = {classes.WrapperImg}>
        <img src = {props.img} alt = {props.name}/>
      </div>
      <div className = {classes.InfoWrapper}>
        <div className = {classes.ControlCount}>
          <Button btnType = "CountBtn" clicked = {() => props.itemCount('+')} > + </Button>
          <span className = {classes.Count}> {props.count} </span>
          <Button btnType = "CountBtn" clicked = {() => props.itemCount('-')}> - </Button>
        </div>
        <span className = {classes.DetailInfo}> 
          <Button btnType = "ShoppingCart" clicked = {() => props.orderedItem(props.id)} ><ShoppingCart/></Button>
          {props.price}원
        </span>
      </div>
    </div>
  )
}

export default item;