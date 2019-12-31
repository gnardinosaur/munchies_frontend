import React from 'react';

class Cart extends React.Component {

  state = {
    orderComplete: false
  }

  cartTotal = () => {
    let total;

    if (this.props.cartItems.length === 1) {
      total = this.props.cartItems[0].price * this.props.cartItems[0].qty
    } else if (this.props.cartItems.length > 1) {
      total = this.props.cartItems.reduce((a, b) => {
        return a + (b.price * b.qty)
        }, 0)
    } else { 
      total = 0
    }
    return total
  }

  createOrder = () => {
    fetch("http://localhost:3000/api/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ 
        total: this.cartTotal(),
        user: this.props.userId
      })
    })
    .then(resp => resp.json())
    .then(data => this.createOrderItems(data.id))
  }

  createOrderItems = (orderId) => {
    this.props.cartItems.forEach(item => {
      fetch("http://localhost:3000/api/v1/order_items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: item.name,
          price: item.price,
          quantity: item.qty,
          order: orderId
        })      
      })
      .then(resp => resp.json())
      .then(this.setState({ orderComplete: true }))
    })
    
    this.props.clearCartItems()
  }

  render(){

    if (this.state.orderComplete) {
      return <div>Order Complete!</div>
    } else {
      let checkoutButton = 
        <div className="checkout-btn">
          <button onClick={this.createOrder}>Checkout</button>
        </div>
    

      return (
        <div className="cart">
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
            {this.props.cartItems.map((item) => { 
            return (
              <tr>  
                <td><button onClick={() => this.props.removeItemFromCart(item.id)}>&times;</button>{item.name}</td>
                <td>$ {item.price}</td>
                <td>{item.qty}</td>
                <td>$ {(item.price * item.qty).toFixed(2)}</td>
              </tr>
            )})}
              <tr className="cart-total">
                <td></td>
                <td></td>
                <td>Total</td>
                <td>$ {this.cartTotal()}</td>
              </tr>
            </tbody>
          </table>

          {this.props.cartItems.length !== 0 && checkoutButton}
          
        </div>
      )
    }
  }
}

export default Cart;