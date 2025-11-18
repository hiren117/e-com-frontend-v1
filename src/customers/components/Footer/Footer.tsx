import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <div>
      <Grid
        container
        className="bg-black text-white text-center mt-10"
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}> {/* 👈 added `item` for Grid */}
          <Typography className="font-bold mb-2">Company</Typography>
          <Typography>About Us</Typography>
          <Typography>Careers</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
