import React from 'react'

class Test extends React.Component {

  state = {
    cart: [
      {name: "banana", price: 0.99, quantity: 4}, 
      {name: "cookie", price: 1.29, quantity: 1}, 
      {name: "steak", price: 13.99, quantity: 2}
    ]
  }

  render() {
    return (
      <div> 
        <ul>
          {this.state.cart.map((item, index) => 
            <div>
            <li>Item# {index + 1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.quantity}</li>
            </div>
          )} 
        </ul>
      </div>
    )
  }

}

export default Test;


