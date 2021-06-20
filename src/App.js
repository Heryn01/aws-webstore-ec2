import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';
import Products from './components/Products/Products';
import Broker from './components/Broker/Broker';
import Cart from './components/Cart/Cart';
import Customer from './components/Customer/Customer';
import Department from './components/Department/Department';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Marketing from './components/Marketing/Marketing';
import Reporting from './components/Reporting/Reporting';
import Video from './components/Video/Videos';

function App() {

  const [selection, setSelection] = useState('home');
  const [cart, setCart] = useState([]);


  function updateCart(newCart) {
    setCart(newCart);
    console.log(newCart);
  }

  let data;
  
  let component;

  switch (selection) {
    case 'broker':
      component = <Broker />
      break;
    case 'cart':
      component = <Cart cart={cart} updateCart={updateCart}/>
      break;
    case 'customer':
      component = <Customer />
      break;
    case 'department':
      component = <Department />
      break;
    case 'landing':
      component = <Landing />
      break;
    case 'login':
      component = <Login />
      break;
    case 'marketing':
      component = <Marketing />
      break;
    case 'products':
      component = <Products cart={cart} updateCart={updateCart} />;
      break;
    case 'reporting':
      component = <Reporting />;
      break;
    case 'video':
      component = <Video />
      break;
    default:
      component = <Landing />;
      break;
  }

  const buttons = ["Broker", "Customer", "Department", "Login", "Marketing", "Products", "Reporting", "Video"];

  return (
    <div className="App">
      <div className="header">
        <table>
          <tr>
          <td style={{"width": "25%", "padding": "10px"}}>
            <img src="acme-logo.png" alt="acme-logo-3.png" onClick={() => setSelection('landing')} style={{"height": "60px", "width": "auto", "cursor": "pointer"}}/>
          </td>
          <td>
            {buttons.map(name =>
            <button className={selection === name.toLowerCase() ? "nav-bar-button-selected": "nav-bar-button" }onClick={() => setSelection(name.toLowerCase())}>{name}</button>  
            )}
            <button className="nav-bar-button" onClick={() => setSelection('cart')}>Cart {cart.length > 0 && <>({cart.length})</>}</button>
          </td>
          </tr>
        </table>
      </div>

      <div className="main">
        {component}
      </div>
    </div>
  );
}

export default App;
