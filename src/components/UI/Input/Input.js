import React from 'react';
import classes from './Input.module.scss';

const input = ({invalid, shouldValidate, elementType, label,
                changed, value, valueReq,valuePaymentMethod, name, elementConfig, touched}) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];
  if(invalid && shouldValidate && touched) {
    inputClasses.push(classes.Invalid);
  }
  switch(elementType) {
    case 'input' :
      inputElement = <input
                        className = {inputClasses.join(' ')}
                        {...elementConfig}
                        value = {value}
                        onChange  = {changed} /> 
      break;
    case 'textarea' : 
      inputElement = <textarea
                        className = {inputClasses.join(' ')}
                        {...elementConfig}
                        value = {valueReq}
                        name = {name}
                        onChange  = {changed} /> 
      break;
    case 'select' : 
      inputElement =  <select
                        className={inputClasses.join(' ')}
                        onChange={changed}
                        value = {valuePaymentMethod}
                        >
                        {elementConfig.options.map(option => (
                            <option key={option.value} 
                                    value={option.value}>
                                {option.displayValue}
                            </option>
                            ))}
                        </select>
      break;
    default : 
    break;
  }

  return (
    <div className = {classes.Input} >
      <label className = {classes.Label}>{label}</label>
        {inputElement}
    </div>
  )
};
export default input;