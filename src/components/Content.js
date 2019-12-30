import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BestSellers from './BestSellers';
import ShowItem from './ShowItem';
import Cart from './Cart';

class Content extends React.Component {

  state = {
    showItem: {},
    cartItems: []
  }

  setShowItem = (itemObj) => {
    this.setState({ showItem: itemObj });
    this.props.changeURL("/home/item")
  }

  addItemToCart = (itemObj, num) => {
    itemObj = {...itemObj, qty: num};
    this.setState({ cartItems: [...this.state.cartItems, itemObj] });
    this.props.changeURL("/home")
  }

  removeItemFromCart = (id) => {
    this.setState({ cartItems: this.state.cartItems.filter(item => item.id !== id) })
  }

  render() {
    return (
      //change div Text based on type of content rendered in this component ex. Best Sellers, Items, Cart of Profile
      <div className="content"> content component
        <Switch>
          <Route path="/home/item" render={() => <ShowItem item={this.state.showItem} addItemToCart={this.addItemToCart} />} />
          <Route path="/home/cart" render={() => <Cart cartItems={this.state.cartItems} removeItemFromCart={this.removeItemFromCart} userId={this.props.userId} />}/>
          {/* <Profile /> */}
          <Route path="/home" render={() => <BestSellers setShowItem={this.setShowItem} />} />
        </Switch> 
      </div>
    )
  }
};

export default Content;
