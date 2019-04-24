import React ,{Component} from 'react';

const withClass =(WrappedComponent) => {
  return  class CounterControl extends Component {
    state = {
      counter : 0,
      key : null
    }
  
    itemCountHandler = (sign) => {
      let controledCount = this.state.counter;
      switch(sign) {
        case '+' :
          controledCount++;
          this.setState({counter : controledCount})
          break;
        case '-' :
          if(controledCount !==0) 
          controledCount--  
          this.setState({counter : controledCount})
          break;
        case undefined :
          controledCount = 0;
          this.setState({counter : controledCount})
          break;
        default : 
          break;
      }
    }
    orderedItemHandler = (id, userId) => {
      let { MenuDataUIActions, selectedMenu, totalPrice } = this.props;
      let controledItem = {...this.props.menu};
      let controledCount = this.state.counter;
      const {price} = controledItem;
      let orderedListArr = [...selectedMenu];
      this.itemCountHandler(id);
      if(controledCount !== 0) {
        controledItem.counter = controledCount;
        orderedListArr.push({...controledItem, key : id, userId});
        totalPrice += controledCount*price;
        MenuDataUIActions.totalPrice(totalPrice);
        MenuDataUIActions.selectedMenu(orderedListArr);  
      }
      this.setState({counter : 0})
    }
    
      render() {
        const {itemCountHandler, orderedItemHandler } = this;
        const { counter }  = this.state
        return (
          <WrappedComponent 
            {...this.props} 
            counter = {counter}
            orderedItemHandler = {orderedItemHandler}
            itemCountHandler = {itemCountHandler}
          />
        )
      }
    }
}
  


export default withClass;