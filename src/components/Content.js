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
    this.props.changeURL("/item")
  }

  addItemToCart = (itemObj, num) => {
    itemObj = {...itemObj, qty: num};
    this.setState({ cartItems: [...this.state.cartItems, itemObj] });
    this.props.changeURL("/")
  }

  removeItemFromCart = (id) => {
    this.setState({ cartItems: this.state.cartItems.filter(item => item.id !== id) })
  }

  clearCartItems = () => {
    this.setState({ cartItems: [] })
    setTimeout(() => this.props.changeURL("/"), 3000)
  }

  contentTitle = () => {
    let text; 
    switch (window.location.pathname) {
      case "/":
        text = "Best Sellers!!!"
        break;
      case "/item":
        text = `Get Some ${this.state.showItem.name}...`
        break;
      case "/cart":
        if (this.props.user.username) {
          text = `${this.props.user.username}'s Cart`
        } else {
          text = "Your Cart"
        }
      break;
    }
    return text 
  }

  render() {
    return (
      <div className="content"> 
        <div className="content-title">{this.contentTitle()}</div>
        <Switch>
          <Route path="/item" render={() => <ShowItem item={this.state.showItem} addItemToCart={this.addItemToCart} />} />
          <Route path="/cart" render={() => <Cart cartItems={this.state.cartItems} removeItemFromCart={this.removeItemFromCart} userId={this.props.user.id} clearCartItems={this.clearCartItems}/>}/>
          <Route path="/profile" render={() => <Profile user={this.props.user} userLoggedIn={this.props.userLoggedIn} setUser={this.props.setUser} updateUser={this.props.updateUser} />} />
          <Route path="/" render={() => <BestSellers setShowItem={this.setShowItem} />} />
        </Switch> 
      </div>
    )
  }
};

export default Content;
