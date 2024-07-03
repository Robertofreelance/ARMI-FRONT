import { ProductInterface } from "./productInterface";

export interface CartInterface {
    id: string;
    quantity: number;
    product: ProductInterface;
}

export interface ShoppingCartInterface {
    cart: CartInterface[];
    totalPrice: number;
}