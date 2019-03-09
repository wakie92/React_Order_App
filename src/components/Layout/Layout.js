import React from 'react';
import classes from './Layout.module.scss';
import ToolbarContainer from 'containers/Toolbar/ToolbarContainer'
import CategoryBar from 'components/CategoryBar/CategoryBar'
import OrderContainer from 'containers/OrderSection/OrderContainer';
import ModalContainer from 'containers/ModalContainer/ModalContainer'

// import { Route } from 'react-router-dom';
// import { 
//   Menu,
//   Home
// } from 'pages';
const layout = (props) => {
  return(
    <>
    <ToolbarContainer/>
    <ModalContainer/>
    <div className = {classes.Layout}>
      <div className = {classes.Content}>
        <CategoryBar/>
          {props.children}
        {/* <ItemsContainer/> */}
        <OrderContainer/>
      </div>
    </div>
    </>
  )
}

export default layout;