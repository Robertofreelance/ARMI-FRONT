import { CartInterface } from "@/utils/interfaces/shoppingCartInterface";
import { ADD_PRODUCT_TO_SHOPPING_CART, DELETE_PRODUCT_OFF_SHOPPING_CART, GET_SHOPPING_CART, UPDATE_PRODUCT_OFF_SHOPPING_CART } from "../actions/cartActions";

export function cartReducer(state: any, action: any) {
    switch (action.type) {
        case GET_SHOPPING_CART:
            return {
                ...state,
                shoppingCart: action.payload,
            };
        case ADD_PRODUCT_TO_SHOPPING_CART:
            return {
                ...state,
                shoppingCart: { ...state.shoppingCart, cart: [...state.shoppingCart.cart, action.payload] },
            };
        case DELETE_PRODUCT_OFF_SHOPPING_CART:
            const filtered = state.shoppingCart.cart.filter((cart: CartInterface) => cart.id !== action.payload);
            return {
                ...state,
                shoppingCart: { ...state.shoppingCart, cart: filtered },
            };
        case UPDATE_PRODUCT_OFF_SHOPPING_CART:
            const modified = state.shoppingCart.cart.map((cart: CartInterface) => {
                if (cart.id === action.payload.id) {
                    return action.payload
                }
                return cart
            })
            return {
                ...state,
                shoppingCart: { ...state.shoppingCart, cart: modified },
            };
        default:
            return state;
    }
}