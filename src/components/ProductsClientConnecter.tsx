"use client"
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { CartProvider } from "@/context/provider/cartProvider";
import { ProductInterface } from "@/utils/interfaces/productInterface";
import { Typography } from "@mui/material";


export function ProductsClientConnecter({ products }: { products: [ProductInterface] }) {
  

    return (
        <CartProvider>
            <Header />
            <Typography align="center" mt={4} variant="h3">Productos</Typography>
            <ProductCard products={products} />
        </CartProvider>
    )

}