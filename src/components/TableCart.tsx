"use client"
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '@/context/provider/cartProvider';
import { CartInterface } from '@/utils/interfaces/shoppingCartInterface';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TableCart({ openEdit, openDelete }: { openEdit: (cart: CartInterface) => void, openDelete: (id: string) => void }) {
    const { shoppingCart } = useContext(CartContext);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell>Producto</TableCell>
                        <TableCell align="right">Cantidad</TableCell>
                        <TableCell align="right">Precio</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell align="center">Editar</TableCell>
                        <TableCell align="center">Eliminar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {shoppingCart?.cart.map((cart: CartInterface) => (
                        <TableRow key={cart.id}>
                            <TableCell component="th" scope="row">
                                {cart.product.name}
                            </TableCell>
                            <TableCell align="right">{cart.quantity}</TableCell>
                            <TableCell align="right">{cart.product.price}</TableCell>
                            <TableCell align="right">{(cart.quantity * cart.product.price).toFixed(2)}</TableCell>
                            <TableCell align="center">
                                <Button onClick={() => openEdit(cart)} variant='contained' color='warning'>
                                    <EditIcon />
                                </Button>
                            </TableCell>
                            <TableCell align="center">
                                <Button onClick={() => openDelete(cart.id)} variant='contained' color='error'>
                                    <DeleteIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

