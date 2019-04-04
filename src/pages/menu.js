import React from 'react';
import Layout from 'components/Layout/Layout'
import ItemsContainer from 'containers/Items/ItemsContainer';
import Footer from 'components/UI/Footer/Footer';

const menu = ({location}) => {
  return (
    <>
      <Layout>
        <ItemsContainer/>
      </Layout>
      <Footer/>
    </>
  )
}

export default menu;