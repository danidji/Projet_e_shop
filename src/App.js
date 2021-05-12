import './style/App.sass';
import React, { useState } from 'react';
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
import { findVoucher } from './lib/database'


function App() {

  // console.log('app.js', AppContext.Provider);

  //On initialise notre contexte dans un state qui sera envoyé dans la value de AppContext
  const [state, setState] = useState({
    basket: JSON.parse(localStorage.getItem('basket')) //on initialise le panier avec le contenue du local storage 
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

      //          v-- on spécifie l'état d'avant pour que celui ci ne soit pas écrasé lors du setState
      setState({ ...state, basket: tab });
      //Enregistrement dans le local storage
      localStorage.setItem('basket', JSON.stringify(tab))

      //récupération du panier dans le local storage 
      // let basketStorage = JSON.parse(localStorage.getItem('basket'))

      // console.log(`App -> basketStorage`, basketStorage, typeof basketStorage)


    }
    //A changer de place 
    , setQuantityBasket: (productCode, qty, sens, e) => {
      let newQty = qty;
      let tab = state.basket


      sens === (-1) ? newQty-- : newQty++

      //Si ma quantité arrive à 0 on supprime l'élément sinon on incrémente la quantité
      if (newQty === 0) {
        console.log(`App -> tab`, tab)
        console.log(`App -> tab`, tab)
        console.log(`App -> tab`, tab)
        console.log(`App -> tab`, tab)
        state.clearBasket(productCode)
      } else {

        tab.forEach(element => {
          if (element.productCode === productCode) {
            element.qty = newQty;
          }

        })
      }
      // console.log(`App -> newQty`, tab)
      setState({ ...state, basket: tab });

    }

    , clearBasket: (productCode) => {
      let basket = state.basket;
      let elementASupp = basket.find(element => element.productCode === productCode);

      basket.splice(basket.indexOf(elementASupp), 1);
      // console.log(`App -> newBasket`, basket)

      setState({ ...state, basket: basket });
      //Mise à jour du panier dans le local storage
      localStorage.setItem('basket', JSON.stringify(basket))
    }
    , setVoucherRate: (voucherRate) => {
      if (findVoucher(voucherRate) !== undefined) {
        return Object.values((findVoucher(voucherRate)))[0]

      } else {
        return false
      }

    }

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
