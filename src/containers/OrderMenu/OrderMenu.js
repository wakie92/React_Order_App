import React, { Component } from 'react';

import CategoryBar from 'components/CategoryBar/CategoryBar'
import Items from 'components/Items/Items';
import Order from 'components/Order/Order';

class OrderMenu extends Component {

  render() {
    return(
      <>
        <CategoryBar/>
        <Items/>
        <Order/>
      </>
    );
  }
}

export default OrderMenu;