import './style/App.sass';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import pages 
import Home from './pages/Home'
import Basket from './pages/Basket'
import Product from './pages/Product'
import Erreur404 from './pages/Erreur404'

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
    basket: JSON.parse(localStorage.getItem('basket')) ? JSON.parse(localStorage.getItem('basket')) : []   //on initialise le panier avec le contenue du local storage ou un tableau vide si il n'y a rien dans le local storage
    , voucherRate: null

    , addToBasket: (productCode) => {

      //Je récupère l'état de mon panier 
      let tab = state.basket;

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
      //Afficher une notif 
      toast.success('Produit ajouté au panier')
      //Enregistrement dans le local storage
      localStorage.setItem('basket', JSON.stringify(tab))

      //récupération du panier dans le local storage 
      // let basketStorage = JSON.parse(localStorage.getItem('basket'))
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


    //Suppression d'un article du panier 
    , clearBasket: (productCode) => {
      let basket = state.basket;
      let elementASupp = basket.find(element => element.productCode === productCode);

      basket.splice(basket.indexOf(elementASupp), 1);

      setState({ ...state, basket: basket });

      //Mise à jour du panier dans le local storage
      localStorage.setItem('basket', JSON.stringify(basket))
    }


    // Suppression de l'ensemble du panier 
    , clearAllBasket: () => {
      localStorage.removeItem('basket');
      setState({ ...state, basket: [] });
    }


    //Retourne le code promo si exact
    , setVoucherRate: (voucherRate) => {
      setState({ ...state, voucherRate: voucherRate })
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

          <Route exact path="/success">
            <Home />
          </Route>

          <Route exact path="/cancel">
            <Basket />
          </Route>

          <Route>
            <Erreur404 />
          </Route>


        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
