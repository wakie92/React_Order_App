import React from 'react';
import classes from './Home.module.scss';

const home = () => {
  return (
    <div className = {classes.Wrapper}>
      라이브러리  : React.js<br/>
      CSS :  Sass, grid, flex<br/>
      사용모듈 :  Redux, Redux-thunk, Sass, Axios, Pender, Firebase, React-router, immutable , Webpack<br/>
      데이터베이스  : Firebase realTime database<br/>
      정적파일저장소 : 아마존 S3<br/>
      배포 : 아마존 S3 <br/>
      주요기능 :  메뉴 주문, 비로그인 로그인 주문내역확인, 로그인<br/><br/>

    </div>
  )
}

export default home;