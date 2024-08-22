import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ background: "linear-gradient(135deg, #6dd5fa, #ffffff)" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ProfSpector
        </Typography>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>Login</Button>
        <Button variant="contained" color="primary">Signup</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
