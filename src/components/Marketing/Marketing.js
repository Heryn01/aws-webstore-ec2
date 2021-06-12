import React from 'react';
import axios from 'axios';

export default class Marketing extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get("http://localhost:8081/marketing")
      .then(res => {
        const data = res.data.cart;
        this.setState({ data });
      })
  }

  render() {
    return (
      <div>
        Marketing<br />
      </div>
    )
  }
}