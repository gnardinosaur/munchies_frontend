import React from 'react';
import CartImage from '../cart-btn.png'

class ShowItem extends React.Component {
  
  state = {
    qty: 1
  }

  setQty = (e) => {
    this.setState({ qty: e.target.value })
  }
  
  render() {
    const selectOptions = function options() {
      let nums = [];
      for (let i = 1; i < 10; i++) {
        nums.push(<option value={i}>{i}</option>);
      }
      return nums;
    }

    return (
      <div className="one-item">
        <h3>{this.props.item.items}</h3>
        <h4>$ {this.props.item.total}</h4>
        <h5>{this.props.item.id}</h5>
        <div className="select">
          Qty:<select onChange={this.setQty}> {selectOptions()} </select>
        </div>
        <button className="add-to-cart-btn" onClick={() => this.props.addItemToCart(this.props.item, this.state.qty)}>
          <img src={CartImage} alt="cart" />
          <div>Add To Cart</div>
        </button> 
      </div>
    )
  }
};

export default ShowItem;