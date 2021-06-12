import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get("http://localhost:8081/login")
      .then(res => {
        const data = res.data.cart;
        this.setState({ data });
      })
  }

  render() {
    return (
      <div>
        Login Page<br />
      </div>
    )
  }
}