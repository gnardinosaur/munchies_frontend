import React from 'react';
import cart from "../cart.png";
import user from "../user.png";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="search-bar">
          <input placeholder="Search..."/>
        </div>
        <div className="header-imgs">
          <img src={cart} />
          <img src={user} />
        </div>
      </div> 
    )
  }
}

export default Header