import React ,{Component} from 'react';

const withClass =(WrappedComponent) => {
  return  class CounterControl extends Component {
    state = {
      counter : 0,
      key : null
    }
  
    //count 코드 최적화 해야함//
    //itemsContainer에서 id찾고 카운트 올릴 필요 없음.
    //해결한다면 렌더링 횟수 줄어들것으로 예상
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