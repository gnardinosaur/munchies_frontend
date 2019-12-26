import React from 'react';
import {Route, Switch } from 'react-router-dom';
import SideNav from './SideNav';
import Header from './Header';
import Content from './Content';
import BestSellers from './BestSellers';
import Item from './Item';


class Home extends React.Component {

  render() {
    return(
      <div>
        <SideNav />
        <Header />
        <Content /> 
          <Switch>
            <Route path="/home" component={BestSellers} />
            <Route path="/item" render={() => <Item routerProps={this.props.routerProps} />} />
            {/* <Cart />
            <Profile /> */}
          </Switch>
      </div>
    )
  }
  
} 

export default Home