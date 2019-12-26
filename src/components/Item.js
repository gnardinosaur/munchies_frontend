import React from 'react';

class Item extends React.Component {
  
  renderItem = () => {
    this.props.history.push("/item")
  }
  
  render() {
    return (
      <div className="item" onClick={this.renderItem}>
        <h3>{this.props.items}</h3>
        <h4>$ {this.props.total}</h4>
        <h5>{this.props.id}</h5>
      </div>
    )
  }
};

export default Item