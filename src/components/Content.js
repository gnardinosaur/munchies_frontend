import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BestSellers from './BestSellers';
import ShowItem from './ShowItem';

class Content extends React.Component {

  state = {
    item: {}
  }

  showItem = (itemObj) => {
    this.setState({ item: itemObj })
    this.props.routerProps("/home/item")
  }

  render() {
    return (
      //change div Text based on type of content rendered in this component ex. Best Sellers, Items, Cart of Profile
      <div className="content"> content component
        <Switch>
          <Route path="/home/item" render={() => <ShowItem item={this.state.item} />} />
          <Route path="/home" render={() => <BestSellers showItem={this.showItem} />} />
          {/* <Cart />
          <Profile /> */}
        </Switch> 
      </div>
    )
  }
};

export default Content;
