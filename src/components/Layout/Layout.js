import React from 'react';
import classes from './Layout.module.scss';
import ToolbarContainer from 'containers/Toolbar/ToolbarContainer'

const layout = (props) => {
  return(
    <>
    <ToolbarContainer/>
    <div className = {classes.Layout}>
      {/* <Backdraw/> */}
      <main className = {classes.Content}>
        {props.children}
      </main>
    </div>
    </>
  )
}

export default layout;