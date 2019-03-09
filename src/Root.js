import React from 'react';
import App from 'components/App'
import { Provider } from 'react-redux';
import configure from 'store/configure';
import { BrowserRouter } from 'react-router-dom';
const store = configure();

const Root = () => {
    return (
      <Provider store = {store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>
    );
  }

export default Root;
