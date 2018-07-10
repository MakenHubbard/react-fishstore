import React from 'react';

import orderRequests from '../../firebaseRequests/orders';
import authRequests from '../../firebaseRequests/auth';
import Orders from '../Order/Order';
import './OrderSpa.css';

class OrderSpa extends React.Component {
  state = {
    orders: [],
  }

  componentDidMount () {
    orderRequests
      .getRequest(authRequests.getUid())
      .then((orders) => {
        this.setState({orders});
      })
      .catch((err) => {
        console.error('error with fish get request', err);
      });
  }

  render () {
    const orderComponents = this.state.orders.map((order) => {
      return (
        <Orders
          key={order.id}
        />
      );
    });
    return (
      <div className="OrderSpa">
        <h2>Orders</h2>
        <button>New Order</button>
        <ul>
          {orderComponents}
        </ul>
      </div>
    );
  }
}

export default OrderSpa;
