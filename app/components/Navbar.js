import React from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ background: "linear-gradient(135deg, #6dd5fa, #ffffff)" }}
    >
      <Toolbar>
        {/* Image Box */}
        <Box sx={{ display: "flex", alignItems: "center", mr: 0 }}>
          <Image
            src="/robot-removebg-preview.png"
            alt="Profspector Logo"
            width={50}
            height={55}
            quality={100} // optional: specify image quality
          />
        </Box>
        {/* Typography and Buttons */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, color: "#1C3B74", fontWeight: "650" }}
        >
          <Link style={{ textDecoration: "none", color: "#1C3B74" }} href="/">
            ProfSpector
          </Link>
        </Typography>
        <Link href="/sign-in">
          <Button
            variant="contained"
            color="primary"
            sx={{
              mr: 2,
              background: "linear-gradient(135deg, #62cff4, #02386E)",
              // fontSize: "1.1rem",
              color: "#fff",
              paddingX: 2,
              paddingY: 0.8,
              borderRadius: 4,
              textTransform: "none",
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
              transition:
                "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.02)", // Slightly scale up on hover
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            Login
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button
            variant="contained"
            color="primary"
            sx={{
              background: "linear-gradient(135deg, #62cff4, #02386E)",
              // fontSize: "1rem",
              color: "#fff",
              paddingX: 2,
              paddingY: 0.8,
              borderRadius: 4,
              textTransform: "none",
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
              transition:
                "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.01)", // Slightly scale up on hover
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            Signup
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

