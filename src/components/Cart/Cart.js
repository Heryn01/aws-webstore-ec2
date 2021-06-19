import React from 'react';
import axios from 'axios';
import moment from 'moment';

export default class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      cart: this.props.cart
    };
  }

  /*
  state = {
    data: [],
    cart: this.state.cart,
  }*/

  componentDidMount() {
    axios.get("http://localhost:8081/cart")
      .then(res => {
        const data = res.data.cart;
        this.setState({ data });
      })
  }

  render() {
    
    let totalPrice = 0;
    this.props.cart.forEach(item => totalPrice += item.price);
    return (
      <div>

        {this.props.cart.map(item =>
          <div>
            <h2>{item.name}</h2> - <i>{item.price}</i>
          </div>  
        )}

        Cart Total: ${(totalPrice * 1.08).toFixed(2)}<br />
        {totalPrice > 0 && <button onClick={() => {
          axios.post("http://localhost:8081/cart", {products: this.props.cart, time: moment().format()})
            .then(res => {
              console.log(res);
              if(res.status == 200) {
                alert("Checkout completed! Thank you for shopping with ACME!");
                this.props.updateCart([]);
              }
            })
        }}>Checkout</button>}
      </div>
    )
  }
}