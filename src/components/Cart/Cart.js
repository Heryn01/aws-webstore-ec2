import React from 'react';
import axios from 'axios';

export default class Cart extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get("http://localhost:8081/cart")
      .then(res => {
        const data = res.data.cart;
        this.setState({ data });
      })
  }

  render() {
    return (
      <div>
        Shopping Cart<br />
      </div>
    )
  }
}