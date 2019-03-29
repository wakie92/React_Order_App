import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryBar from 'components/CategoryBar/CategoryBar';
// import {
//   Menu,
//   Login,
//   Log
// } from 'pages';
class CategoryBarContainer extends Component {
  //코드스플리팅 중 깜박임현상 잡기 위한 코드
  blockToBlink = (tg) => {
    import('pages/index').then((Pages) => {
      Pages.tg.preload()
    })
  }

  handleMouseOver = (tg) => {
    try {
      switch(tg) {
        case 'Menu' : import('pages/index').then((pages) => {
          // console.log(pages.Menu);
          pages.Menu.preload();
        }) 
              break;
        case 'Login' :  import('pages/index').then((pages) => {
          pages.Login.preload();
        }) 
              break;
        case 'Log' :  import('pages/index').then((pages) => {
          pages.Log.preload();
        }) 
              break;
        default :  console.log('error');
        break;
      }
    } catch{
      console.log('error with loading page')
    }
  };
  render() {
    const {toolbar} = this.props
    const {handleMouseOver} = this;
    return (
      <CategoryBar
        toolbar = {toolbar}
        onPreload = {handleMouseOver}
      />
    );
  }
}

export default  connect((state) => ({
  toolbar : state.menuDataUI.get('toolbar')
}))(CategoryBarContainer);