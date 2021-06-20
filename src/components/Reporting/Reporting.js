import React from 'react';
import axios from 'axios';
import { JsonToTable } from "react-json-to-table";

export default class Products extends React.Component {
  state = {
    reports: []
  }

  componentDidMount() {
    axios.get("http://localhost:8081/reporting")
      .then(res => {
        const reports = res.data.product;
        this.setState({ reports });
      })
  }

  render() {
    return (
      <div>
      <JsonToTable json={this.state.reports} />
    </div>
    )
  }
}

