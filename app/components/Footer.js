import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  const spectorBlue = "#4D74DB"; // Color extracted from the image for "Spector"

  return (
    <Box component="footer" sx={{ width: '100%' }}> {/* Ensure full width */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #6dd5fa, #ffffff)",
          color: "#5D4C46",
          py: 6,
          width: '100%', // Ensure the inner box also covers full width
        }}
      >
        <Box sx={{ maxWidth: 'lg', margin: '0 auto', px: 2 }}> {/* Optional padding adjustments */}
          <Grid container spacing={4}>
            {/* Column 1: Company Info */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                <span style={{ color: "#F6F4E3" }}>Prof</span><span style={{ color: "#1C3B74" }}>Spector</span> {/* Grey color */}
                 {/* Blue color from image */}
              </Typography>
              <Typography variant="body2" sx={{ color: "#5D4C46", mb: 2 }}>
                Your AI-driven partner in academic excellence. ProfSpector
                leverages advanced technology to provide personalized
                professor recommendations, helping you make informed decisions
                about your education.
              </Typography>
              <Typography variant="body2" sx={{ color: "#5D4C46" }}>
                &copy; {new Date().getFullYear()} ProfSpector. All rights reserved.
              </Typography>
            </Grid>

            {/* Column 2: Quick Links */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#1C3B74" }}>
                Quick Links
              </Typography>
              <Link
                href="/"
                color="inherit"
                underline="none"
                sx={{ display: "block", mb: 1 }}
              >
                Home
              </Link>
              <Link
                href="/sign-up"
                color="inherit"
                underline="none"
                sx={{ display: "block", mb: 1 }}
              >
                Sign Up
              </Link>
              <Link
                href="/recommendation"
                color="inherit"
                underline="none"
                sx={{ display: "block", mb: 1 }}
              >
                Get Recommendations
              </Link>
            </Grid>

            {/* Column 3: Social Media Links */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#1C3B74"}}>
                Follow Us
              </Typography>
              <Link
                href="https://www.facebook.com"
                color="inherit"
                underline="none"
                sx={{ display: "inline-block", mr: 2 }}
              >
                <img
                  src="/facebook-icon.png"
                  alt="Facebook"
                  style={{ width: 24, height: 24 }}
                />
              </Link>
              <Link
                href="https://www.twitter.com"
                color="inherit"
                underline="none"
                sx={{ display: "inline-block", mr: 2 }}
              >
                <img
                  src="/twitter-icon.png"
                  alt="Twitter"
                  style={{ width: 24, height: 24 }}
                />
              </Link>
              <Link
                href="https://www.instagram.com"
                color="inherit"
                underline="none"
                sx={{ display: "inline-block", mr: 2 }}
              >
                <img
                  src="/instagram-icon.png"
                  alt="Instagram"
                  style={{ width: 24, height: 24 }}
                />
              </Link>
              {/* <Link
                href="https://www.linkedin.com"
                color="inherit"
                underline="none"
                sx={{ display: "inline-block", mr: 2 }}
              >
                <img
                  src="/linkedin-icon.png"
                  alt="LinkedIn"
                  style={{ width: 24, height: 24 }}
                />
              </Link> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
