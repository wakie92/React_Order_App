import React from 'react';
import classes from './Home.module.scss';

const home = () => {
  return (
    <div className = {classes.Wrapper}>
      계정 : admin / admin , manager / manager<br/><br/>
      라이브러리  : React.js<br/>
      CSS :  Sass, grid, flex<br/>
      사용모듈 :  Redux, Redux-thunk, Sass, Axios, Pender, Firebase, React-router, immutable , Webpack<br/>
      데이터베이스  : Firebase realTime database<br/>
      정적파일저장소 : 아마존 S3<br/>
      배포 : 아마존 S3 <br/>
      주요기능 :  메뉴 주문, 비로그인 로그인 주문내역확인, 로그인<br/><br/>

      설명 :  기본에 충실한 프로젝트를 만들어봤습니다. 퍼블리싱은 gird와 flex를 이용하여 반응형에 잘 어울리게 했습니다.<br/>
      Sass는 css전처리기로 코드를 짤 때 유지보수하기 편하게 짤 수 있습니다. 색깔이나 기본적인 설정을 변수에 담아 할수 있어 사용했습니다.<br/>
      코드는  ES6를 사용하여 주로 짰습니다. 상태관리는 Redux를 이용해서 관리를 했습니다. <br/>
      Redux를 사용한 이유는 부모자식 관계의 컴포넌트들만 주고받는 것이 아니라 여러 컴포넌트에서 상태를 관리하고 사용하기 위해 입니다.<br/>
      Redux는 중간자 역할을 하여 여러 컴포넌트를 커치지 않고, subscribe하고있는 컴포넌트에게 직접 원하는 상태값을 가져올수 있습니다.<br/>
      Redux구조를 잡고 ducks구조를 사용하여, reducer와 action을 짰습니다.<br/>
      axios를 이용하여 비동기 통신을 하였고, pender를 미들웨어로 사용하여 통신에 성공했을때, 실패했을때 결과값을 달리하여 통신결과를 알수 있게 했습니다.<br/>
      파이어베이스를 사용해 데이터베이스를 구축하고, 아마존 S3에 url의 형태로 저장한 이미지파일들을 불러썼습니다.<br/>
      create-react-app V2가 릴리즈 되어 빌드시 Webpack설정을 따로 하지 않아도 되어 좀더 편하게 사용하였습니다.<br/>
      이 프로젝트는 정적웹사이트이기 때문에 아마존 S3에 저장하여 배포하였습니다. S3설정 시 접근권한을 public으로 설정해 주어야만 다른 곳에서도 접근가능하기 때문에 설정해 주었습니다.<br/>

      <br/><br/>
      배운점 : 이번 프로젝트에서 배운점은 다음과 같습니다.<br/> 
      1. 파이어베이스 사용법 :  파이어베이스의 데이터베이스를 다루는 법을 알게 되었고, 삽질을 많이 하긴 했지만 많은 공부가 되었습니다. 데이터를 받아서 사용할 때 내가 사용하기 좋게 정제하기 위해, 자바스크립트 공부도 많이 할 수 있었습니다.<br/> 
      2. grid사용법 : flex는 이전에 사용해 봤지만 grid는 사용해 본적이 없어서 공부를 하여 사용해 봤습니다. 말 그대로 flex를 사용할때는 유연한 느낌을 받았고, grid는 판에 찍어내는 듯한 느낌을 받았습니다. 둘다 장단점이 있어 같이 사용했을때 더 효율이 좋다고 느꼈습니다. <br/> 
      3. Redux-Thunk : Redux를 비동기적으로 사용해 본적이 없었지만, 이번 프로젝트에서는 필요해 처음 사용해 봤습니다. promise나, async await처럼 작업의 순서를 정할 수 있어 편했습니다. <br/> 
      4. Build하는법 : 처음으로 프로젝트를 build를 해보았습니다. build를 하기 위해서 Webpack설정을 많이 해야한 다는 것도 알게되었고, Webpack를 조금이나마 공부 할 수있는 기회였습니다. 
      <br/><br/>

      아쉬운점 <br/>
      1. Redux-Thunk 말고 다음에는 Redux-saga를 한번 사용해보고싶습니다.<br/>
      2. Sass가 가지고있는 기능을 다 사용하지 못한점이 아쉽습니다.<br/>
      3. Reducer를 더 잘 짰으면 코드가 간결해지지 않았을까 하는 아쉬움이있습니다.<br/>
      4. 코드질에 대한 아쉬움이있습니다.<br/>
    </div>
  )
}

export default home;