import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0f172a",
        color: "#cbd5e1",
        mt: 8,
        pt: 6,
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}
      >
        {/* Brand */}
        <Grid item xs={12} md={3}>
          <Typography variant="h5" fontWeight="bold" color="white">
            E-COMMERCE
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, lineHeight: 1.6 }}>
            Premium products crafted for quality, performance,
            and everyday reliability.
          </Typography>
        </Grid>

        {/* Products */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" color="white" gutterBottom>
            Products
          </Typography>
          {["New Arrivals", "Best Sellers", "Categories", "Offers"].map(
            (item) => (
              <Typography
                key={item}
                variant="body2"
                sx={{
                  mb: 1,
                  cursor: "pointer",
                  "&:hover": { color: "white" },
                }}
              >
                {item}
              </Typography>
            )
          )}
        </Grid>

        {/* Company */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" color="white" gutterBottom>
            Company
          </Typography>
          {[
            "About Us",
            "Careers",
            "Privacy Policy",
            "Terms & Conditions",
          ].map((item) => (
            <Typography
              key={item}
              variant="body2"
              sx={{
                mb: 1,
                cursor: "pointer",
                "&:hover": { color: "white" },
              }}
            >
              {item}
            </Typography>
          ))}
        </Grid>

        {/* Contact */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" color="white" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2">support@yourbrand.com</Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            +91 98765 43210
          </Typography>

          <Box>
            <IconButton sx={{ color: "#cbd5e1" }}>
              <LanguageIcon />
            </IconButton>
            <IconButton sx={{ color: "#cbd5e1" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "#cbd5e1" }}>
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: "#cbd5e1" }}>
              <TwitterIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, borderColor: "#334155" }} />

      {/* Bottom */}
      <Box sx={{ textAlign: "center", pb: 3 }}>
        <Typography variant="body2" color="#94a3b8">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
