import React from "react";
import "./cartItem.scss";

const CartItem = ({ data, deleteOneFromCart,deleteAllFromCart }) => {
  let { id, name, price, quantity } = data;

  return (
    <div className="cartItem">
      <h4>{name}</h4>
      <h5>
        ${price}.00 x{quantity}
      </h5>
      <h6>{quantity > 0 ? "$" + quantity * price + ".00" : price}</h6>
      <button onClick={() => deleteOneFromCart(id)}>Eliminar uno</button>
      <br/>
      <button onClick={() => deleteAllFromCart(id, true)}>Eliminar todos</button>
    </div>
  );
};

export default CartItem;
