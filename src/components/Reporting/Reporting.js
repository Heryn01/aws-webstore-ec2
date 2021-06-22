import React from 'react';
import axios from 'axios';
import { JsonToTable } from "react-json-to-table";

export default class Products extends React.Component {
  state = {
    reports: []
  }

  componentDidMount() {
    axios.get("http://ec2-18-208-184-244.compute-1.amazonaws.com:8081/reporting")
      .then(res => {
        const reports = res.data.product;
        this.setState({ reports });
      })
  }

  render() {
    return (
      <div>
        <div className="page-header">Reporting</div>
        <br /><br />
        <JsonToTable json={this.state.reports} />
    </div>
    )
  }
}

