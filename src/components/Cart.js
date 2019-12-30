import React from 'react';

class Cart extends React.Component {

  cartTotal = () => {
    let total;

    if (this.props.cartItems.length === 1) {
      total = this.props.cartItems[0].total * this.props.cartItems[0].qty
    } else if (this.props.cartItems.length > 1) {
      total = this.props.cartItems.reduce((a, b) => {
        return a + (b.total * b.qty)
        }, 0)
    } else { 
      total = 0
    }

    return total
  }

  saveOrder = () => {
    let itemNames = this.props.cartItems.map(item => item.items)
    let newOrder = {
      items: itemNames,
      total: this.cartTotal(),
      userId: this.props.userId
    }; 
    
    fetch("http://localhost:3000/api/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newOrder)
    })
    .then(resp => resp.json())
    .then(console.log)
  }

  render(){

    let checkoutButton = 
      <div className="checkout-btn">
        <button onClick={this.saveOrder}>Checkout</button>
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
              <td><button onClick={() => this.props.removeItemFromCart(item.id)}>&times;</button>{item.items}</td>
              <td>$ {item.total}</td>
              <td>{item.qty}</td>
              <td>$ {item.total * item.qty}</td>
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

export default Cart;