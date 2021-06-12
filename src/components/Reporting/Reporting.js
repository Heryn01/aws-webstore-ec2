import React from 'react';
import axios from 'axios';

export default class Reporting extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get("http://localhost:8081/reporting")
      .then(res => {
        const data = res.data.cart;
        this.setState({ data });
      })
  }

  render() {
    return (
      <div>
        Reporting Page<br />
      </div>
    )
  }
}