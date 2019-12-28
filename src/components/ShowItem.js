import React from 'react';

class ShowItem extends React.Component {
  render() {
    return (
      <div className="one-item">
        <h3>{this.props.item.items}</h3>
        <h4>$ {this.props.item.total}</h4>
        <h5>{this.props.item.id}</h5>
      </div>
    )
  }
};

export default ShowItem;