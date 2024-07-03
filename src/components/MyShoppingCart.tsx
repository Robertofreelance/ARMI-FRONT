"use client"
import Typography from '@mui/material/Typography';
import { Box, Button, Grid } from '@mui/material';
import ProductModal from './modals/ProductModal';
import { useContext, useEffect, useState } from 'react';
import { fetchShoppingCart } from '@/utils/consumers';
import { CartContext } from '@/context/provider/cartProvider';
import TableCart from './TableCart';
import { CartInterface } from '@/utils/interfaces/shoppingCartInterface';
import DeleteProductModal from './modals/DeleteProductModal';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

export default function MyShoppingCart() {
    const router = useRouter();
    const { getShoppingCart, shoppingCart } = useContext(CartContext);
    const [open, setOpen] = useState<CartInterface | null>(null);
    const [openDelete, setOpenDelete] = useState<string | null>(null);

    const handleClickOpen = (product: CartInterface) => {
        setOpen(product);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const handleDeleteOpen = (id: string) => {
        setOpenDelete(id);
    };

    const handleDeleteClose = () => {
        setOpenDelete(null);
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
            <Grid container justifyContent={"center"} alignItems={"center"}>
                <Grid item xs={3} justifyContent={"flex-end"} display={"flex"}>
                    <Button onClick={() => router.push("/")} variant='contained'>
                        <ArrowBackIcon />
                    </Button>
                </Grid>
                <Grid item xs={6}>

                    <Typography align="center" mt={3} mb={3} variant="h3">Mi carrito de compras</Typography>
                </Grid>
                <Grid item xs={3}>
                </Grid>
            </Grid>
            <Box pl={4} pr={4} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                <TableCart openEdit={handleClickOpen} openDelete={handleDeleteOpen} />
                <Box display={"flex"} width={"100%"} justifyContent={"flex-end"}>
                    <Typography fontSize={20} mt={2}>Precio Total: {shoppingCart?.totalPrice}</Typography>
                </Box>
            </Box>
            {open && (
                <ProductModal product={open.product} edit={true} idToEdit={open.id} previusQuantity={open.quantity} handleClose={handleClose} />
            )}
            {openDelete && (
                <DeleteProductModal id={openDelete} handleClose={handleDeleteClose} />
            )}
        </Box>
    );
}
