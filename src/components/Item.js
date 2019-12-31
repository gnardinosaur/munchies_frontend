import React from 'react';

class Item extends React.Component {
  
  addZeros = () => {
    let reg = /\.0/;
    let num = this.props.price;

    if (reg.exec(num)) {
      return num + "0"
    } else {
      return num
    }
  }

  render() {
    return (
      <div className="item">
        <img src={this.props.img_url} alt="item"/>
        <h3>{this.props.name}</h3>
        <h4>$ {this.addZeros()}</h4>
        <div className="view-item" onClick={() => this.props.setShowItem(this.props)}>View Item</div>
      </div>
    )
  }
};

export default Item