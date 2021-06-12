import React from 'react';
import axios from 'axios';

export default class Broker extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get("http://localhost:8081/broker")
      .then(res => {
        const data = res.data.cart;
        this.setState({ data });
      })
  }

  render() {
    return (
      <div>
        Broker Page<br />
      </div>
    )
  }
}