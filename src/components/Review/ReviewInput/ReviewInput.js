import React from 'react';
import classes from './ReviewInput.module.scss';
import Button from 'components/UI/Button/Button';
const ReviewInput = ({inputForm}) => {

  return (
    <>
      <div className = {classes.ReplyInputWrapper}>
        <div className = {classes.LoginedUserId}>로그인 아이디</div>
        <div className = {classes.InputFrom}>{inputForm}</div>
        <Button clssName = {classes.Btn} btnType = "Reply">등록</Button>
      </div>
      <hr></hr>
    </>
  )
}

export default ReviewInput;