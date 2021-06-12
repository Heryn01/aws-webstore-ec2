import React from 'react';
import axios from 'axios';

export default class Customer extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get("http://localhost:8081/customer")
      .then(res => {
        const data = res.data.cart;
        this.setState({ data });
      })
  }

  render() {
    return (
      <div>
        Customer Page<br />
      </div>
    )
  }
}