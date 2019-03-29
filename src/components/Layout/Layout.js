import React from 'react';
import classes from './Layout.module.scss';
import ToolbarContainer from 'containers/Toolbar/ToolbarContainer'
import CategoryBarContainer from 'containers/CategoryBar/CategoryBarContainer'
import OrderContainer from 'containers/OrderSection/OrderContainer';
import ModalContainer from 'containers/ModalContainer/ModalContainer'

// import { Route } from 'react-router-dom';
// import { 
//   Menu,
//   Home
// } from 'pages';
const layout = (props) => {
  console.log(props);
  return(
    <>
    <ToolbarContainer/>
    <ModalContainer/>
    <div className = {classes.Layout}>
      <div className = {classes.Content}>
        <CategoryBarContainer/>
          {props.children}
        <OrderContainer/>
      </div>
    </div>
    </>
  )
}

export default layout;