// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import CategoryBar from 'components/CategoryBar/CategoryBar'
// import ItemsContainer from 'containers/Items/ItemsContainer';
// import * as menuDataUIActions from 'store/modules/menuDataUI';
// import * as menuDataActions from 'store/modules/menuData';
// import OrderContainer from '../OrderSection/OrderContainer';
// import { Route , Switch} from 'react-router-dom';
// import { 
//   Menu,
//   Home
// } from 'pages';
// class OrderMenu extends Component {
  
//   categoryBarHandler = () => {
//     const { MenuDataUIActions, show } = this.props;
//     !show ? MenuDataUIActions.showTF(true) :MenuDataUIActions.showTF(false)
//   }

//   componentDidMount(prevProps, prevState)  {
//     const { MenuDataUIActions } = this.props;
//     MenuDataUIActions.checkedTF({cash : false, card:false});
//     MenuDataUIActions.getMenuList();
//     MenuDataUIActions.showTF(true);
//     // if(prevProps.location !== this.props.location){

//     // }
//   }
//   // shouldComponentUpdate(nextProps, nextState) {
//   //   return nextProps !== this.props
//   // }
//   render() {
//     const { categoryBarHandler, } = this;
//     const { menuData, show, toolbar, } = this.props;
//     // let menuList = [...menuData ]
//     console.log(menuData);
//     console.log('[ORDER_MENU] : render')
//     return(
//       <>
//         <ModalContainer/>
//         <CategoryBar  
//           showAll = {categoryBarHandler}
//           toolbar = {toolbar}  
//         />
//         {/* <ItemsContainer 
//           show = {show} 
//           controledMENU = {menuList} 
//         /> */}
       
//         <OrderContainer
//         />
//       </>
//     );
//   }
// }

// export default connect((state) => ({
//   menuData : state.menuDataUI.get('menu'),
//   show : state.menuDataUI.get('show'),
//   modalShow : state.menuDataUI.get('modalShow'),
//   toolbar : state.menuDataUI.get('toolbar'),
// }),
// (dispatch) => ({
//   MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch),
//   MenuDataActions : bindActionCreators(menuDataActions, dispatch)
// })
// )(OrderMenu);