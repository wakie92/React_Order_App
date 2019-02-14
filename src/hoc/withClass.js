import React ,{Component} from 'react';

const withClass = (WrappedComponent, className) => {
  return (props)=> (
    class CounterControl extends Component {

      render() {
        return (
        <div className = {className}>
          <WrappedComponent {...props}/>
        </div>
        )
      }
    }
    
  )
}

export default withClass;