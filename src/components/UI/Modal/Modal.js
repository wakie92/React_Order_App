import React,{Fragment} from 'react';
import classes from './Modal.module.scss';
import Button from 'components/UI/Button/Button';
const modal = ({selectedMenu, show, closeModal,
                totalPrice, checkedTF, amountToPay,
                req, finalConfirm}) => {
  const os_menu = selectedMenu.map(
    (item) => {
      let key = '';
      const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for( var i=0; i < 5; i++ )
        key += possible.charAt(Math.floor(Math.random() * possible.length));
      return(
        <Fragment key = {key}>
          <div className = {classes.ArrangedItem} key = {item.name+item.id}>
            <img className = {classes.ItemImg} alt = {item.name} src = {item.img}/>
            <div className = {classes.Info}>
              <span> {item.name} </span>
              <span> {item.counter} 개</span>
              <span> {item.price*item.counter} 원</span>
            </div>
          </div>
          <hr/>
        </Fragment>
      )
    }
  )
  return (
    show ? 
    <div className = {classes.ModalGround}  onClick = {(e) => {e.stopPropagation(); closeModal()}}>
      <div className = {classes.ModalWrapper} onClick = {(e) => {e.stopPropagation();}}>
        <div className = {classes.ModalTop}>
          <span>주문확인</span>
        </div>
        <div className = { classes.ModalMain}> 
          <div className = {classes.OrderSummaryWrapper}>
            <div className = {classes.DetailInfo}>
              {os_menu}
            </div>
            
            <div className = {classes.ClientReq}>
              <div className = {`${classes.OrderPrice} ${classes.Dist}`}>
                <span className = {classes.ColumnName}>주문금액</span>
                <div className = {classes.Contents}><span>{totalPrice}원</span></div>
              </div>
              <hr/>
              <div className = {`${classes.PaymentWay} ${classes.Dist}`} >
                <span className = {classes.ColumnName}>결제방법</span>
                {
                  checkedTF['card'] 
                  ? <div className = {classes.Contents}> <span>카드결제</span> </div> 
                  : <div className = {classes.Contents}> <span>현금결제 {amountToPay}원</span></div> 
                }
              </div>
              <hr/>
              <div className = {`${classes.MessageSection} ${classes.Dist}`}>
                <span className = {classes.ColumnName}>요청사항</span>
                {
                  req === ""
                  ? <div className = {classes.Message}>(없음)</div>
                  : <div className = {classes.Message}>{req}</div>
                }
              </div>
              <hr/>
          </div>
            <Button btnType = "Confirm" clicked = {finalConfirm}>주문확정</Button>
        </div>
        </div>
    </div>
    </div>
    : null
  )
}
export default modal;