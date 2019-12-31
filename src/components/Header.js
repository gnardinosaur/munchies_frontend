import React from 'react';
import cart from "../cart.png";
import user from "../user.png";

class Header extends React.Component {

  viewCart = () => {
    this.props.changeURL("/home/cart")
  }

  viewProfile = () => {
    this.props.changeURL("/home/profile")
  }

  render() {
    return (
      <div className="header">
        <div className="search-bar">
          <input placeholder="Search..."/>
        </div>
        <div className="header-imgs">
          <img onClick={this.viewCart} src={cart} alt={"cart"}/>
          <img onClick={this.viewProfile} src={user} alt={"user"} />
        </div>
      </div> 
    )
  }
}

export default Header