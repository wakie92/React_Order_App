import React from 'react';
import Layout from 'components/Layout/Layout'
import OrderMenu from 'containers/OrderMenu/OrderMenu'
import { Provider } from 'react-redux';
import configure from 'store/configure';
const store = configure();

const Root = () => {
    return (
      <Provider store = {store}>
        <Layout>
          <OrderMenu/>
        </Layout>
      </Provider>
    );
  }

export default Root;
