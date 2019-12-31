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
        nums.push(<option key={i} value={i}>{i}</option>);
      }
      return nums;
    }

    return (
      <div className="one-item">
        <img className="item-img" src= {this.props.item.img_url} alt="item"/>
        <h3>{this.props.item.name}</h3>
        <h4>$ {this.props.item.price}</h4>
        
        <div className="add-to-cart">
          <div className="add-to-cart-select">
            Qty:<select onChange={this.setQty}> {selectOptions()} </select>
          </div>

          <button className="add-to-cart-btn" onClick={() => this.props.addItemToCart(this.props.item, this.state.qty)}>
            <img src={CartImage} alt="cart" />
            <div>Add To Cart</div>
          </button> 
        </div> 

      </div>
    )
  }
};

export default ShowItem;