import React from 'react';

class PastOrders extends React.Component {

  state = {
    sortedOrders: {}
  }

  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}/order_items`)
    .then(resp => resp.json())
    .then(orderItemsArr => this.createOrdersHash(orderItemsArr))
  }

  createOrdersHash = (orderItemsArr) => {
    let compiledOrders = {};

    orderItemsArr.map(item => {
      if (compiledOrders.hasOwnProperty(item.order_id)) {
        compiledOrders[item.order_id].push(item)
      } else {
        compiledOrders[item.order_id] = Array(item)
      }
    })

    this.setState({sortedOrders: compiledOrders}) 
  }

  createOrdersTable = () => {

    let orders = this.state.sortedOrders;

    for (let key in orders) {
      return (
        <div className="past-orders-tbl">
          <div className="order-num">Order#: {key} </div>
          <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Item Qunatity</th>
              <th>Item Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{orders[key][0].name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      )
    }

  }

  render(){
    return (
      <div>
        <h3>Past Orders</h3>
        {this.createOrdersTable()}
      </div> 
    )
  }
};

export default PastOrders;