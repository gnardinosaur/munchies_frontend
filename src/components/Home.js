import React from 'react';
import SideNav from './SideNav';
import Header from './Header';
import Content from './Content';

class Home extends React.Component {

  render() {
    return(
      <div>
        <SideNav />
        <Header />
        <Content routerProps={this.props.history.push} />
      </div>
    )
  }
  
} 

export default Home