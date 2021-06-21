import React from 'react';
import '../../App.css';

export default class Landing extends React.Component {
  state = {
    data: []
  }

  /*
  componentDidMount() {
    axios.get("http://localhost:8081/landing")
      .then(res => {
        const data = res.data.cart;
        this.setState({ data });
      })
  }
  */

  render() {
    return (
      <div>
      <table>
        <tr valign="top">
          <td>
            <img src="acme-landing.jpg" style={{"height": "400px", "width": "auto"}} />
          </td>
          <td style={{"padding-left": "30px"}}>
            <div className="page-header" >
              Welcome to ACME Corporation!
            </div>
            <br />

            <ul style={{"textAlign": "left"}}><br />
              <li>Go Shopping! Customers can view our available <b>Products</b> and check out at <b>Cart</b></li><br />
              <li><b>Brokers</b> can manage their available products and add new products, delete products, or modify existing products</li><br />
              <li>Purchase history can be viewed in <b>Reports</b></li><br />
              <li>View <b>Marketing</b> files</li><br />
              <li>Check out the <b>Video</b> page to watch CEO Wil. E. Coyote's favorites</li><br />
            </ul>
          </td>
        </tr>
        
         
       
      </table>
      <div style={{"textAlign": "center", "padding-left": "00%"}}>
        <h3>Website designed for ACME Corporation by <b><i>The Amazonians:</i></b></h3>
        Joshua Gilliland, Nathan Albers, Heston Friedland, Poet Jones, Akintoye Oloko, Gabriella Svendsen, and Ryan Wedell<br />
        <h3>Powered by Amazon Web Services</h3>
      </div>
        </div>       
    )
  }
}