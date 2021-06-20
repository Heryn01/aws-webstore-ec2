import React, { useState } from 'react';
import axios from 'axios';
import EditProduct from './EditProduct';

export default class Broker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      name: '',
      price: 0,
      desc: '',
      cat: '',
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleCatChange = this.handleCatChange.bind(this);
  }
  

  componentDidMount() {
    axios.get("http://localhost:8081/broker")
      .then(res => {
        const products = res.data.data;
        this.setState({ products });
      })
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleDescriptionChange(event) {
    this.setState({desc: event.target.value});
  }

  handlePriceChange(event) {
    this.setState({price: event.target.value});
  }

  handleCatChange(event) {
    this.setState({cat: event.target.value});
  }

  render() {

    const products = this.state.products;
    return (
        <table style={{"width": "100%"}}>
          <td style={{"width": "50%"}}>
            <div className="page-header">Edit Products</div>
            <br /><br />
            {products.map(product =>
              <EditProduct product={product} /> 
            )}
          </td>
          <td style={{"width": "50%"}}>
            <div className="page-header">Add New Product</div>
            <br /><br />
            <div className="add-product">
            <b>Name: </b> <input onChange={this.handleNameChange}/><br /><br />
            <b>Price: </b> <input onChange={this.handlePriceChange}/><br /><br />
            <b>Category: </b> <input onChange={this.handleCatChange}/><br /><br />
            <b>Description: </b> <input onChange={this.handleDescriptionChange}/><br /><br />

            <button className="nav-bar-button-selected" onClick={() => {
              axios.post("http://localhost:8081/new-product", {
                name: this.state.name,
                desc: this.state.desc,
                price: this.state.price,
                cat: this.state.cat,
              })
              .then(res => {
                console.log(res);
                if(res.status == 200) {
                  alert("Product Added");
                }
              })
            }}>Add</button>
            </div>
          </td>
        </table>
        

      

    )
  }
}