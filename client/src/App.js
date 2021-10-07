import { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header';
import HomePage  from './pages/HomePage';
import CartPage from './pages/CartPage';
import Cookies from 'js-cookie';

const App = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(Cookies.get('cartItems') || '[]'));

  const onAdd = (product) => {
    const clone = cartItems.find(cartItem => cartItem.id === product.id);
    if (clone) {
      setCartItems(cartItems.map(cartItem => cartItem.id === product.id ? {...clone, count: clone.count + 1} : cartItem));
    } else {
      setCartItems([...cartItems, {...product, count: 1}]);
    }
    Cookies.set('cartItems', JSON.stringify(cartItems));
  }

  const onRemove = (product) => {
    const clone = cartItems.find(cartItem => cartItem.id === product.id);
    if (clone.count === 0) {
      setCartItems(cartItems.filter(cartItem => cartItem.id !== product.id));
      onDelete(product);
    } else {
      setCartItems(
        cartItems.map(cartItem => cartItem.id === product.id ? {...clone, count: clone.count - 1} : cartItem)
      )
    }
    Cookies.set('cartItems', JSON.stringify(cartItems));
  }

  const onDelete = (product) => {
    const clone = cartItems.find(cartItem => cartItem.id === product.id);
    if (clone) {
      setCartItems(cartItems.slice().filter((cartItem) => cartItem.id !== product.id));
    }
    Cookies.set('cartItems', JSON.stringify(cartItems));
  }
  Cookies.set('cartItems', JSON.stringify(cartItems));
  return (
    <Router>
      <Header cartItems={cartItems}/>
      <Route path="/" render={() => <HomePage onAdd={onAdd}/>} exact/>
      <Route path="/cart" render={() => <CartPage cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete}/>} exact/>
    </Router>
  )
}

export default App;
