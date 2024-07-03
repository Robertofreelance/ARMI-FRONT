"use client"
import {  CartProvider } from "@/context/provider/cartProvider";
import Header from "@/components/Header";
import MyShoppingCart from "@/components/MyShoppingCart";

export default function ShoppingCart() {

  return (
    <CartProvider>
      <Header />
      <MyShoppingCart />
    </CartProvider>
  );
}


