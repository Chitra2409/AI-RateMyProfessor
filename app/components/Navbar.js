import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ background: "linear-gradient(135deg, #6dd5fa, #ffffff)" }} 
      className="header"  // Adding the header class here
    >
      <Toolbar>
        {/* Image Box */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 0 }}>
          <Image 
            src="/robot-removebg-preview.png" 
            alt="Profspector Logo" 
            width={50} 
            height={55} 
            quality={100} // optional: specify image quality
          />
        </Box>
        {/* Typography and Buttons */}
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign:'left', color:"#1C3B74", fontWeight:'bold' }}>
          ProfSpector
        </Typography>
        <SignedOut>
          <Button variant="contained" color="primary" href="/sign-in" sx={{ mr: 2 }}>Login</Button>
          <Button variant="contained" color="primary" href="/sign-up">Signup</Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
