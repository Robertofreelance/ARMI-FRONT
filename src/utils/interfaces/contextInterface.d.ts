import { CartInterface, ShoppingCartInterface } from "./shoppingCartInterface";

export type ContextInterface = {
    shoppingCart: ShoppingCartInterface | null;
    addProductToCart: (cart: CartInterface) => void;
    deleteProductFromCart: (id: string) => void;
    updateProductFromCart: (cart: CartInterface) => void;
    getShoppingCart: (shoppingCart: ShoppingCartInterface) => void;
};