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
 
  render() {
    console.log('render [OrderRequirement]')
    return(
      <textarea 
        className = {classes.ReValue} 
        onChange = {this.handleRequirementChange}
        value = {this.props.req_before} 
        placeholder = "요청사항" />
    )
  }
}
export default connect((state) => ({
  modalshow : state.menuDataUI.get('modalshow'),
  confirm : state.menuDataUI.get('confirm')
}),
(dispatch) =>({
  MenuDataUIActions : bindActionCreators(menuDataUIActions,dispatch)
}))(OrderRequirement);