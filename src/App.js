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

//import database 
// import { findProduct } from './lib/database'


function App() {

  // console.log('app.js', AppContext.Provider);

  //On initialise notre contexte dans un state qui sera envoyé dans la value de AppContext
  const [state, setState] = useState({
    basket: []
    , voucherRate: null

    , addToBasket: (productCode) => {

      //Je récupère l'état de mon panier 
      let tab = state.basket;
      // let nb = state.basket.qty;

      //On ajoute un élément au panier si non présent sinon on incrémente sa quantité
      if (typeof (tab.find(element => element.productCode === productCode)) === 'undefined') {

        tab.push({ productCode: productCode, qty: 1 });

      } else {

        tab.forEach(element => {
          if (element.productCode === productCode) {
            element.qty++
          }
        })
      }
      console.log(tab)

      //          v-- on spécifie l'état d'avant pour que celui ci ne soit pas écrasé lors du setState
      setState({ ...state, basket: tab });
    }
    //A changer de place 
    , setQuantityBasket: (productCode, qty, sens, e) => {
      let newQty = qty;
      let tab = state.basket


      sens === (-1) ? newQty-- : newQty++

      tab.forEach(element => {
        console.log(`App -> e.target.classList.contains("less")`, e.target.classList.contains("less"))
        if (element.productCode === productCode) {
          element.qty = newQty;
        }

      })
      // console.log(`App -> newQty`, tab)
      setState({ ...state, basket: tab });

    }

    , clearBasket: () => { }
    , setVoucherRate: (voucherRate) => { }

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
