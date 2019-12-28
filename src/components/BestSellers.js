import React from 'react';
import Item from './Item';

class BestSellers extends React.Component {

  state = {
    bestSellers: []
  }
  
  //change to only display 9 random items from API call 
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/orders")
    .then(resp => resp.json())
    .then(items => this.setState({ bestSellers: items }))
  }
  
  render() {
    return (
      <div className="best-sellers">
        {this.state.bestSellers.map(item => <Item {...item} clickItem={this.props.clickItem} />)}
      </div>
    )
  }
};


export default BestSellers;