import React from 'react';
import axios from 'axios';

export default class Video extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get("http://localhost:8081/video")
      .then(res => {
        const data = res.data.cart;
        this.setState({ data });
      })
  }

  render() {
    return (
      <div>
        [Video Player]<br /><br />
        <button className="nav-bar-button">play</button>
        <button className="nav-bar-button">pause</button>
      </div>
    )
  }
}