import React from 'react';
import Layout from 'components/Layout/Layout'
import Home from 'components/Home/Home';
import Footer from 'components/UI/Footer/Footer';

const home = ({location}) =>{
  return (
    <>
      <Layout>
        <Home>
        </Home>
      </Layout>
      <Footer/>
    </>
  )
}
export default home;