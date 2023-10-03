import { createContext, useState } from "react";
import { productsArray } from "./productStore";

const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  
})
