import axios from 'axios';
import React, { useState } from 'react';
import './Broker.css';

function EditProduct(product) {

  const [name, setName] = useState(product.product.ProductName);
  const [desc, setDesc] = useState(product.product.Description);
  const [price, setPrice] = useState(product.product.Price);
  const [cat, setCat] = useState(product.product.ProductType);


  return (
    <div className="edit-product">
      <b>Name: </b><input value={name} onChange={e => setName(e.target.value)}/><br /><br />
      <b>Price: </b><input value={price} onChange={e => setPrice(e.target.value)}/><br /><br />
      <b>Category: </b><input value={cat} onChange={e => setCat(e.target.value)}/><br /><br />
      <b>Description: </b><input value={desc} onChange={e => setDesc(e.target.value)}/><br /><br />
      <button onClick={() => {
        axios.post("http://localhost:8081/edit-product", {
          id: product.product.ProductID,
          name: name,
          desc: desc,
          price: price,
          cat: cat,
        })
        .then(res => {
          if(res.status == 200) {
            alert("Changes Saved");
          }
        })
      }}>Save Changes</button>
      <button onClick={() => {
        axios.post("http://localhost:8081/delete-product", {id: product.product.ProductID})
        .then(res => {
          if(res.status === 200) {
            alert("Product Deleted");
            window.location.reload();
          }
        })
      }}>Delete Product</button>
      <br /><br />

    </div>
  );
}

export default EditProduct;
