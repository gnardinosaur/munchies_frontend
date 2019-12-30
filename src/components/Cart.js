import React from 'react';

class Cart extends React.Component {

  render(){

    let cartTotal;
    
    if (this.props.cartItems.length === 1) {
      cartTotal = this.props.cartItems[0].total * this.props.cartItems[0].qty
    } else if (this.props.cartItems.length > 1) {
      cartTotal = this.props.cartItems.reduce((a, b) => {
        return a + (b.total * b.qty)
        }, 0)
    } else { 
      cartTotal = 0
    }

    return (
      <div className="cart">
        <table>
          <tr>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Item Qunatity</th>
            <th>Item Total</th>
          </tr>
          {this.props.cartItems.map((item) => {
          return (
            <tr>  
              <td>{item.items}</td>
              <td>$ {item.total}</td>
              <td>{item.qty}</td>
              <td>$ {item.total * item.qty}</td>
            </tr>
          )})}
          <tr className="cart-total">
            <td></td>
            <td></td>
            <td>Total</td>
            <td>$ {cartTotal}</td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Cart;