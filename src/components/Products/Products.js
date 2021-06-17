import React from 'react';
import axios from 'axios';

export default class Products extends React.Component {
  state = {
    products: []
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
            <h1>{product.ProductName} - {product.Price}</h1>
            <b>Category:</b>{product.ProductType}<br />
            <i>Description:</i>{product.Description}<br />

            <button onClick={() => alert("Added to cart")}>Add to Cart</button>
          </div>  
        )}
      </div>
    )
  }
}