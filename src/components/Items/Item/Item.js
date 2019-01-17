import React from 'react';
import classes from './Item.module.scss';

const item = (props) => {
  return (
    <div className = {classes.Item}>
      <div className = {classes.MenuName}>{props.name}</div>
      <div className = {classes.WrapperImg}>
        <img src = {props.img} alt = {props.name}/>
      </div>
      <div className = {classes.InfoWrapper}>
        <div className = {classes.ControlCount}>
          <span className = {classes.CountBtn}> + </span>
          <span className = {classes.Count}>{props.count}</span>
          <span className = {classes.CountBtn}> - </span>
        </div>
        <span className = {classes.DetailInfo}> {props.price}원</span>
      </div>
    </div>
  )
}

export default item;