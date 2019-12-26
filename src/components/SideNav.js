import React from 'react';
import logo from "../logo.png";
import { Link } from 'react-router-dom';

class SideNav extends React.Component {

  render() {
    return ( 
      <div className="sidenav">
        <img src={logo} alt={"logo"}/>
        <h3>Departments -</h3>
          <ul className="list">
            <li><Link to="/grocery" exact>Grocery</Link></li>
            <li><Link to="/produce" exact>Produce</Link></li>
            <li><Link to="/meat" exact>Meat</Link></li>
            <li><Link to="/dairy" exact>Dairy</Link></li>
          </ul>
      </div>
    )
  }

};

export default SideNav;