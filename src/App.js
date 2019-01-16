import React, { Component } from 'react';
import Layout from 'components/Layout/Layout'
import OrderMenu from 'containers/OrderMenu/OrderMenu'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <OrderMenu/>
        </Layout>
      </div>
    );
  }
}

export default App;
