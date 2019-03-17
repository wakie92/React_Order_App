import React from 'react';
import Layout from 'components/Layout/Layout'
import OrderHistoryContainer from 'containers/OrderHistory/OrderHistoryContainer'
const log = ({location}) => {
  return (
    <Layout>
      <OrderHistoryContainer/>
  </Layout>
  )
}

export default log;