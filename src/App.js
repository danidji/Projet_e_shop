import './style/App.sass';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//import pages 
import Home from './pages/Home'
import Basket from './pages/Basket'
import Product from './pages/Product'

//import composants
import Navbar from './components/Navbar';

//import contexte 
import { AppContext } from './AppContext';


function App() {

  // console.log('app.js', AppContext.Provider);

  //On initialise notre contexte dans un state qui sera envoyer dans la value de AppContext
  const [state, setState] = useState({
    basket: [],
    voucherRate: null,

    addToBasket: (productCode) => { },
    clearBasket: () => { },
    setVoucherRate: (voucherRate) => { }
  })

  return (

    <AppContext.Provider value={state} >
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
    </AppContext.Provider>
  );
}

export default App;
