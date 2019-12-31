import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BestSellers from './BestSellers';
import ShowItem from './ShowItem';
import Cart from './Cart';
import Profile from './Profile';

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

  clearCartItems = () => {
    this.setState({ cartItems: [] })
    setTimeout(() => this.props.changeURL("/home"), 3000)
  }

  contentTitle = () => {
    let text; 
    switch (window.location.pathname) {
      case "/home":
        text = "Best Sellers Yo!!!"
        break;
      case "/home/item":
        text = `Get Some ${this.state.showItem.name}...`
        break;
      case "/home/cart":
        text = `${this.props.user.username}'s Cart`
      break;
    }
    return text 
  }

  render() {
    return (
      <div className="content"> 
        <div className="content-title">{this.contentTitle()}</div>
        <Switch>
          <Route path="/home/item" render={() => <ShowItem item={this.state.showItem} addItemToCart={this.addItemToCart} />} />
          <Route path="/home/cart" render={() => <Cart cartItems={this.state.cartItems} removeItemFromCart={this.removeItemFromCart} userId={this.props.user.id} clearCartItems={this.clearCartItems}/>}/>
          <Route path="/home/profile" render={() => <Profile user={this.props.user} />} />
          <Route path="/home" render={() => <BestSellers setShowItem={this.setShowItem} />} />
        </Switch> 
      </div>
    )
  }
};

export default Content;
