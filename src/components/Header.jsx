import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#F5E8DC",
        width: "100%",
        boxShadow: "none",
        paddingTop: "48px",
      }}
    >
      <Toolbar style={{
          display: "flex", 
          justifyContent: "space-between",
          alignItems: "center", 
          margin: "0 100px", 
        }}>
        <IconButton
          edge="start"
          aria-label="menu"
          style={{
            width: "40px",
            height: "40px",
            color: "#5F2B46",
          }}
        >
          <MenuIcon style={{ fontSize: "40px" }} />
        </IconButton>

        <Box style={{ flexGrow: 1, textAlign: "center" }}>
          <Typography
            variant="h2"
            style={{
              fontFamily: "Lilita One",
              color: "#5F2B46",
              fontSize: "32px",
              marginBottom: 0,
            }}
          >
            NOBLE GRAPES
          </Typography>
          <Typography
            variant="h6"
            style={{
              fontFamily: "Grechen Fuemen",
              color: "#5F2B46",
              fontSize: "28px",
            }}
          >
            Curated Elegance
          </Typography>
        </Box>

        <Button
          style={{
            color: "#F5E8DC",
            fontFamily: "Lilita One",
            textTransform: "uppercase",
            marginLeft: "16px",
            backgroundColor: "#5F2B46",
            fontSize: "20px",
            padding: "10px 40px",
            borderRadius: 0,
          }}
        >
          view all
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
