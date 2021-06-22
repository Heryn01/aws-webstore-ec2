import React from 'react';
import axios from 'axios';
import moment from 'moment';
import '../../App.css';


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
    axios.get("http://ec2-18-208-184-244.compute-1.amazonaws.com:8081/cart")
      .then(res => {
        const data = res.data.cart;
        this.setState({ data });
      })
  }

  render() {
    
    let totalPrice = 0;
    this.props.cart.forEach(item => totalPrice += item.price);
    return (
      <div style={{"textAlign": "center"}}>
        <div className="page-header">
          Your Shopping Cart - {this.props.cart.length} {this.props.cart.length === 1 ? "item" : "items"}
        </div>

        <table style={{"width": "80%", "padding-left": "30%", "padding-top": "70px", "textAlign": "left"}}>
          <tr valign="top">
            <td>
              <table>
                <tr><td><h3>Item</h3></td><td style={{"padding-left": "25%"}}><h3>Price</h3></td></tr>
                {this.props.cart.map(item =>
                  <tr>
                    <td>{item.name}</td>
                    <td style={{"padding-left": "25%"}}>{item.price}</td>
                  </tr>
                )}
              </table>
            </td>
            <td>
              <img src="shopping-cart.jpg" style={{"height": "50px", "width": "auto"}} alt="cart" /><br />
              Cart Total: ${(totalPrice * 1.08).toFixed(2)}<br />
        
            </td>
          </tr>
          
        
        </table>
        <br />

     
        {totalPrice > 0 && <button className="nav-bar-button" onClick={() => {
          axios.post("http://ec2-18-208-184-244.compute-1.amazonaws.com:8081/cart", {products: this.props.cart, time: moment().format()})
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