"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { fetchAddProduct, fetchUpdateProduct } from '@/utils/consumers';
import { CartContext } from '@/context/provider/cartProvider';
import { ProductModalInterface } from '@/utils/interfaces/productModalInterface';

export default function ProductModal({ product, handleClose, edit, idToEdit, previusQuantity }: ProductModalInterface) {
    const { addProductToCart, updateProductFromCart } = React.useContext(CartContext);
    const [quantity, setQuantity] = React.useState(previusQuantity ?? 1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity - 1 > 0) {
            setQuantity(quantity - 1);
        }
    }
    const handleConfirm = async () => {
        if (edit) {
            const data = await fetchUpdateProduct(idToEdit ?? "", quantity);
            updateProductFromCart(data);
            handleClose();
        } else {
            const data = await fetchAddProduct(product, quantity);
            addProductToCart(data);
            handleClose();
        }
    }

    return (
        <React.Fragment>
            <Dialog
                open={true}
                onClose={handleClose}
            >
                <DialogTitle>{product.name}</DialogTitle>
                <DialogContent>
                    <img style={{ width: "100%", height: "auto" }} alt='Cafe' src={"https://t1.uc.ltmcdn.com/es/posts/4/5/7/cuales_son_los_beneficios_del_cafe_52754_600.webp"} />
                    <DialogContentText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </DialogContentText>
                    <Box mt={2} flexDirection={"row"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Button onClick={decreaseQuantity}>
                            <ArrowBackIcon />
                        </Button>
                        <Typography ml={2} mr={2} fontSize={22}>{quantity}</Typography>
                        <Button onClick={increaseQuantity}>
                            <ArrowForwardIcon />
                        </Button>
                    </Box>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleConfirm}>{edit ? "Editar" : "Comprar"}</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}