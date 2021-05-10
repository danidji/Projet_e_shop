import { createContext } from 'react';

// On crée ici l'ensemble des méthodes ou variables globales => qui seront utilisé dans plusieurs composant n'ayant pas forcément de lien d'héritage
export const AppContext = createContext({
    basket: []
    , voucherRate: null

    , addToBasket: (productCode) => { }
    , clearBasket: () => { }
    , setVoucherRate: (voucherRate) => { }
    , setQuantityBasket: () => { }


});