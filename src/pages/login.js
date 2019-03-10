import React from 'react';
import Layout from 'components/Layout/Layout'
import LoginContainer from 'containers/Login/LoginContainer'

const login = ({location}) => {
  return (
  <Layout>
    <LoginContainer/>
  </Layout>
  )
}

export default login;