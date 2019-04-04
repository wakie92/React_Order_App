import React from 'react';
import Layout from 'components/Layout/Layout'
import LoginContainer from 'containers/Login/LoginContainer'
import Footer from 'components/UI/Footer/Footer';

const login = ({location}) => {
  return (
  <>
    <Layout>
      <LoginContainer/>
    </Layout>
    <Footer/>
  </>
  )
}

export default login;