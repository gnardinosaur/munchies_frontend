import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BestSellers from './BestSellers';
import Item from './Item';

class Content extends React.Component {

  
  
  clickItem = () => {
    this.props.routerProps("/home/item")
  }

  render() {
    return (
      //change div Text based on type of content rendered in this component ex. Best Sellers, Items, Cart of Profile
      <div>content component
        <Switch>
          <Route path="/home/item" component={Item} />
          <Route path="/home" render={() => <BestSellers clickItem={this.clickItem} />} />
          {/* <Cart />
          <Profile /> */}
        </Switch> 
      </div>
    )
  }
};

export default Content;
