import React from 'react';
import Layout from 'components/Layout/Layout'
import OrderHistoryContainer from 'containers/OrderHistory/OrderHistoryContainer'
import Footer from 'components/UI/Footer/Footer';
const log = ({location}) => {
  return (
  <>
    <Layout>
        <OrderHistoryContainer/>
    </Layout>
    <Footer/>
  </>
  )
}

export default log;