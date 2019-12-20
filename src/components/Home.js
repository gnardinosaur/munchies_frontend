import React from 'react';
import SideNav from './SideNav';
import Header from './Header';

class Home extends React.Component {

  render() {
    return(
      <div>
        <SideNav />
        <Header />
        {/* <Content /> 
          inside Content is <BestSellers />, <Cart />, <Profile />, or <Item /> with correct path */}
      </div>
    )
  }
  
} 

export default Home