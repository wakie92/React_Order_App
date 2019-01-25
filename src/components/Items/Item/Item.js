import React from 'react';
import classes from './Item.module.scss';
import Button from 'components/UI/Button/Button';

const item = (props) => {
  return (
    <div className = {classes.Item}>
      <div className = {classes.MenuName}>{props.name}</div>
      <div className = {classes.WrapperImg}>
        <img src = {props.img} alt = {props.name}/>
      </div>
      <div className = {classes.InfoWrapper}>
        <div className = {classes.ControlCount}>
          <Button className = {classes.CountBtn} clicked = {() => props.addItem(props.id)}> + </Button>
          <span className = {classes.Count}> {props.count} </span>
          <Button className = {classes.CountBtn} clicked = {() => props.removeItem(props.id)}> - </Button>
        </div>
        <span className = {classes.DetailInfo}> {props.price}원</span>
      </div>
    </div>
  )
}

export default item;