import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Image from 'next/image';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ background: "linear-gradient(135deg, #6dd5fa, #ffffff)" }}>
      <Toolbar>
        {/* Image Box */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
          <Image 
            src="" 
            alt="Profspector Logo" 
            width={10} 
            height={10} 
            quality={100} // optional: specify image quality
          />
        </Box>
        {/* Typography and Buttons */}
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
