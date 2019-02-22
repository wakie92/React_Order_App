import React , {Component} from 'react';
import classes from './OrderRequirement.module.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataUIActions from 'store/modules/menuDataUI';
class OrderRequirement extends Component {
  
  handleRequirementChange = (e) => {
    const { MenuDataUIActions} = this.props;
    MenuDataUIActions.requirement(e.target.value)
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps);
  //   console.log(this.props)
  //   return nextProps.confirm !== this.props.confirm;
  // }
  render() {
    return(
      <textarea 
        className = {classes.ReValue} 
        onChange = {this.handleRequirementChange}
        value = {this.props.req} 
        placeholder = "요청사항" />
    )
  }
}
export default connect((state) => ({
  req : state.menuDataUI.get('req'),
  modalshow : state.menuDataUI.get('modalshow'),
  confirm : state.menuDataUI.get('confirm')
}),
(dispatch) =>({
  MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch)
}))(OrderRequirement);