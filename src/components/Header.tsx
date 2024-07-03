"use client";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '@/context/provider/cartProvider';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const { shoppingCart } = useContext(CartContext);
  const amountCart = shoppingCart?.cart?.length;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PruebaFront
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => router.push("/shoppingCart")}
          >
            <Badge badgeContent={amountCart} color="warning">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}