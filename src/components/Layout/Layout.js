import React from 'react';
import classes from './Layout.module.scss';
import ToolbarContainer from 'containers/Toolbar/ToolbarContainer'
import CategoryBarContainer from 'containers/CategoryBar/CategoryBarContainer'
import OrderContainer from 'containers/OrderSection/OrderContainer';
import ModalContainer from 'containers/ModalContainer/ModalContainer'

const layout = ({children}) => {
  return(
    <>
    <ToolbarContainer/>
    <ModalContainer/>
    <div className = {classes.Layout}>
      <div className = {classes.Content}>
        <CategoryBarContainer/>
          {children}
        <OrderContainer/>
      </div>
    </div>
    </>
  )
}

export default layout;