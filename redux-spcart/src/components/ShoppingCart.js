import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  deleteFromCart,
} from "../actions/ShoppingActions";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
import "./shoppingCart.scss";

export const ShoppingCart = () => {
  // redux utiliza useSelector y useDispatch en vez de const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { products, cart } = state.shopping;

  return (
    <div>
      <h2>Carrito de compras</h2>
      <h3>Productos</h3>
      <article className="box">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            data={product}
            addToCart={() => dispatch(addToCart(product.id))}
          />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box__cart">
        <div>
          <button onClick={() => dispatch(clearCart())}>Limpiar Carrito</button>
        </div>
        <div className="box__cart__items">
          {cart.map((item, index) => (
            <CartItem
              key={index}
              data={item}
              deleteOneFromCart={() => dispatch(deleteFromCart(item.id))}
              deleteAllFromCart={() => dispatch(deleteFromCart(item.id, true))}
            />
          ))}
        </div>
      </article>
    </div>
  );
};
