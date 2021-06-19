import React from 'react';
import axios from 'axios';

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
        {this.state.products.map(product => 
          <div>
            <h1>{product.ProductName} - ${(product.Price).toFixed(2)}</h1>
            <b>Category: </b>{product.ProductType}<br />
            <i>Description: </i>{product.Description}<br />
            <button onClick={() => {
                alert("Added to cart");
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