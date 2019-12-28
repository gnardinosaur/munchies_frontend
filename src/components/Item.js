import React from 'react';

class Item extends React.Component {
  
  render() {
    return (
      <div className="item">
        <h3>{this.props.items}</h3>
        <h4>$ {this.props.total}</h4>
        <h5>{this.props.id}</h5>
        <div className="view-item" onClick={() => this.props.showItem(this.props)} >View Item</div>
      </div>
    )
  }
};

export default Item