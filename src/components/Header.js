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
          <img src={cart} alt={"cart"}/>
          <img src={user} alt={"user"} />
        </div>
      </div> 
    )
  }
}

export default Header