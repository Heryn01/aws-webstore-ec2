import React from 'react';
import axios from 'axios';

export default class Landing extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get("http://localhost:8081/landing")
      .then(res => {
        const data = res.data.cart;
        this.setState({ data });
      })
  }

  render() {
    return (
      <div>
        Welcome to ACME Corporation!<br />
      </div>
    )
  }
}