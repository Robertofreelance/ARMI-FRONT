import { CartInterface, ShoppingCartInterface } from "@/utils/interfaces/shoppingCartInterface";
import React, { useReducer, createContext } from "react";
import { cartReducer } from "../reducers/cartReducer";
import { ADD_PRODUCT_TO_SHOPPING_CART, DELETE_PRODUCT_OFF_SHOPPING_CART, GET_SHOPPING_CART, UPDATE_PRODUCT_OFF_SHOPPING_CART } from "../actions/cartActions";
import { ContextInterface } from "@/utils/interfaces/contextInterface";

const initialState = {
    shoppingCart: null,
};

const CartContext = createContext<ContextInterface>({
    shoppingCart: null,
    addProductToCart: (cart) => { },
    deleteProductFromCart: (id) => { },
    updateProductFromCart: (cart) => { },
    getShoppingCart: (shoppingCart) => { },
});

function CartProvider(props: any) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    function getShoppingCart(shoppingCart: ShoppingCartInterface) {
        dispatch({
            type: GET_SHOPPING_CART,
            payload: shoppingCart,
        });
    }

    function addProductToCart(cart: CartInterface) {
        dispatch({
            type: ADD_PRODUCT_TO_SHOPPING_CART,
            payload: cart,
        });
    }

    function deleteProductFromCart(id: string) {
        dispatch({
            type: DELETE_PRODUCT_OFF_SHOPPING_CART,
            payload: id,
        });
    }

    function updateProductFromCart(cart: CartInterface) {
        dispatch({
            type: UPDATE_PRODUCT_OFF_SHOPPING_CART,
            payload: cart,
        });
    }

    return (
        <CartContext.Provider
            value={{
                shoppingCart: state.shoppingCart,
                getShoppingCart,
                addProductToCart,
                deleteProductFromCart,
                updateProductFromCart,
            }}
            {...props}
        />
    );
}

export { CartContext, CartProvider };
