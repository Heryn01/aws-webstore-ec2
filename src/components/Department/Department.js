import React from 'react';
import axios from 'axios';

export default class Department extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get("http://ec2-18-208-184-244.compute-1.amazonaws.com:8081/department")
      .then(res => {
        const data = res.data.cart;
        this.setState({ data });
      })
  }

  render() {
    return (
      <div>
        Department<br />
      </div>
    )
  }
}