import React from 'react';

export default function asyncComponent(getComponent) {
  //route-loader를 코드로 작성
  class AsyncComponent extends React.Component{
    static Component = null;
    static preload() {
      getComponent().then(({default : Component}) => {
        AsyncComponent.Component = Component;
      }) 
    }
    state = {Component : AsyncComponent.Component}

    constructor(props) {
      super(props);
      if(AsyncComponent.Component) return ;
      getComponent().then(({default : Component}) => {
        AsyncComponent.Component = Component;
        this.setState({Component});
      })
    }

    render() {
      const { Component } = this.state;
      if(Component) {
        return <Component {...this.props} />
      }
      return null;
    }
  }
  //서버사이드 렌더링 / 코드 스플리팅 충돌을 해결
  AsyncComponent.getComponent = () => {
    return getComponent().then(({default : Component}) => {
      AsyncComponent.Component = Component;
    })
  }
  return AsyncComponent
}