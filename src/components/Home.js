import React from 'react';
import SideNav from './SideNav';
import Header from './Header';
import Content from './Content';

class Home extends React.Component {

  render() {
    return(
      <div>
        <SideNav changeURL={this.props.history.push} />
        <Header changeURL={this.props.history.push} />
        <Content changeURL={this.props.history.push} user={this.props.user} />
      </div>
    )
  }
  
} 

export default Home