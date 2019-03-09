import React from 'react';
import Layout from 'components/Layout/Layout'
import ItemsContainer from 'containers/Items/ItemsContainer';

const menu = ({location}) => {
  return (
    <Layout>
      <ItemsContainer/>
    </Layout>
  )
}

export default menu;