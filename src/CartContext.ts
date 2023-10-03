import { createContext, useState } from "react";
import { productsArray } from "./productStore";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOnetoCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
})

export function CartProvider({children}) {
  const [cartProducts, setCartProducts] = useState([])

  function getProductQuantity(id: any) {
    cartProducts.find(product => product.id === id)?.quantity

    if(quantity === undefined) {
      return 0
    }

    return quantity
  }

  function addOnetoCart(id: any) {
    const quantity = getProductQuantity(id)

    if(quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1
        }
      ])
    } else {
      setCartProducts(
        cartProducts.map(
         product => 
         product.id === id
         ? { ...product, quantity: product.quantity + 1 }
         : 
         product 
        )
      )
    }
  }

  function removeOneFromCart() {

  }

  function deleteFromCart() {

  }

  function getTotalCost() {

  }

  const contextValue = {
    items: [],
    getProductQuantity,
    addOnetoCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  }



  return (
    <CartContext.Provider value={contextValue}>
      {chilren}
    </CartContext.Provider>
  )
}