import './App.sass';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import pages 
import Home from './pages/Home'
import Basket from './pages/Basket'
import Product from './pages/Product'

//import composants
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/panier">
          <Basket />
        </Route>

        <Route exact path="/produit/:id">
          <Product />
        </Route>


      </Switch>
    </BrowserRouter>
  );
}

export default App;
