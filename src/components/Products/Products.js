import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
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
        Product Page<br />
        {this.state.products.map(p => <p>{p}</p>)}
      </div>
    )
  }
}