"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ProductInterface } from '@/utils/interfaces/productInterface';
import { Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { fetchAddProduct, fetchDeleteProduct, fetchUpdateProduct } from '@/utils/consumers';
import { CartContext } from '@/context/provider/cartProvider';
import { ProductModalInterface } from '@/utils/interfaces/productModalInterface';
import WarningIcon from '@mui/icons-material/Warning';

export default function DeleteProductModal({ handleClose, id }: { handleClose: () => void, id: string }) {
    const { deleteProductFromCart } = React.useContext(CartContext);
    const handleConfirm = async () => {
        const data = await fetchDeleteProduct(id);
        deleteProductFromCart(data.deleted);
        handleClose();
    }

    return (
        <React.Fragment>
            <Dialog
                open={true}
                onClose={handleClose}
            >
                <DialogTitle>Eliminar Producto</DialogTitle>
                <DialogContent>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} mb={1}>
                        <WarningIcon color='error' fontSize='large'/>
                    </Box>
                    <DialogContentText>
                        ¿Estas seguro de eliminar este producto del carrito?
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button color='error' onClick={handleConfirm}>Eliminar</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}