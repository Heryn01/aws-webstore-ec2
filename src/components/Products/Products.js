import React from 'react';
import axios from 'axios';
import '../../App.css';

export default class Products extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: props.cart,
    };
  }
 

  componentDidMount() {
    axios.get("http://localhost:8081/products")
      .then(res => {
        const products = res.data.products;
        this.setState({ products });
      })
  }

  render() {
    return (
      <div>
        <div className="page-header">
          ACME Products
        </div>
        {this.state.products.map(product => 
          <div className="product">
            <h1>{product.ProductName} - ${(product.Price).toFixed(2)}</h1>
            <h4>{product.Description}</h4>
              Category: {product.ProductType}<br /><br />

            <button className="nav-bar-button" onClick={() => {
                alert(product.ProductName + " added to cart!");
                this.props.updateCart(this.props.cart.concat({name: product.ProductName, price: product.Price, id: product.ProductID}));
              }}
            >
              Add to Cart
            </button>
          </div>  
        )}
      </div>
    )
  }
}