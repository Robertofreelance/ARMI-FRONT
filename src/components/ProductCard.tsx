"use client"
import Typography from '@mui/material/Typography';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid } from '@mui/material';
import { ProductInterface } from '@/utils/interfaces/productInterface';
import ProductModal from './modals/ProductModal';
import { useContext, useEffect, useState } from 'react';
import { fetchShoppingCart } from '@/utils/consumers';
import { CartContext } from '@/context/provider/cartProvider';

export default function ProductCard({ products }: { products: [ProductInterface] }) {
    const { getShoppingCart } = useContext(CartContext);
    const [open, setOpen] = useState<ProductInterface | null>(null);

    const handleClickOpen = (product: ProductInterface) => {
        setOpen(product);
    };

    const handleClose = () => {
        setOpen(null);
    };

    async function getCart() {
        const data = await fetchShoppingCart();
        getShoppingCart(data)
    }
    useEffect(() => {
        getCart();
    }, [])

    return (
        <Box>

            <Grid container p={8} justifyContent={"center"} alignItems={"center"} spacing={12}>
                {products.map((product: ProductInterface) => (
                    <Grid key={product.id} item xs={4}>

                        <Card >
                            <CardActionArea onClick={() => handleClickOpen(product)}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://t1.uc.ltmcdn.com/es/posts/4/5/7/cuales_son_los_beneficios_del_cafe_52754_600.webp"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {open && (
                <ProductModal product={open}  handleClose={handleClose} />
            )}
        </Box>
    );
}
