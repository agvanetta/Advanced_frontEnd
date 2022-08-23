import { TYPES } from "../actions/ShoppingActions";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Zapatillas", price: 1100 },
    { id: 2, name: "Televisor", price: 2200 },
    { id: 3, name: "Mac PRO", price: 1300 },
    { id: 4, name: "Estufa", price: 4000 },
    { id: 5, name: "Pad + Mouse", price: 5400 },
    { id: 6, name: "Celular", price: 1600 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };

      // retorna el estado ;pero en la propiedad cart es igual a ["...state", agregale "newItem"] spreadOperator
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
    }
    case TYPES.CLEAR_CART: {
    }
    default:
      return state;
  }
}
