import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          School App
        </Typography>
        <Button color="inherit" onClick={() => router.push('/')}>Home</Button>
        <Button color="inherit" onClick={() => router.push('/about')}>About</Button>
        <Button color="inherit" onClick={() => router.push('/contact')}>Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
