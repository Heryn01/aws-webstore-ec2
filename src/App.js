import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';
import Products from './components/Products/Products';


function App() {

  const [selection, setSelection] = useState('');


  let data;

  
  Axios({
    method: "GET",
    url: "http://localhost:8081/home",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    //console.log(res.data.message);
    data = res.data.message;
  });
  
  
  let component;

  switch (selection) {
    case 'home':
      component = <div>Landing</div>;
      break;
    case 'products':
      component = <Products />;
      break;
    case 'reporting':
      component = <div>reporting</div>;
      break;
    case 'employee':
      component = <div>employee</div>;
      break;
    case 'cart':
      component = <div>Cart</div>
      break;
    default:
      component = <div>Landing</div>;
      break;
  }
  return (
    <div className="App">
      <img src="acme-logo.png" alt="yo" />
      <div className="header">
        <button className="nav-bar-button" onClick={() => setSelection('landing')}>Landing</button>
        <button className="nav-bar-button" onClick={() => setSelection('products')}>Products</button>
        <button className="nav-bar-button" onClick={() => setSelection('reporting')}>Reporting</button>
        <button className="nav-bar-button" onClick={() => setSelection('employee')}>Employee</button>
        <button className="nav-bar-button" onClick={() => setSelection('cart')}>Cart</button>

        

        <div style={{"margin-top": "50px"}}>
          {component}
        </div>
      </div>
    </div>
  );
}

export default App;
