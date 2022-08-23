import React, { useReducer } from "react";
import { TYPES } from "../actions/ShoppingActions";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
import "./shoppingCart.scss";

export const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const deleteFromCart = () => {};
  const clearCart = () => {};

  return (
    <div>
      <h2>Carrito de compras</h2>
      <h3>Productos</h3>
      <article className="box">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box__cart">
        <div>
          <button onClick={clearCart}>Limpiar Carrito</button>
        </div>
        <div className="box__cart__items">
          {cart.map((item, index) => (
            <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />
          ))}
        </div>
      </article>
    </div>
  );
};
