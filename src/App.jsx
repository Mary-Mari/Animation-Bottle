import React, { useRef } from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Bottle from "./components/Bottle";
import Header from "./components/Header";
import Info from "./components/Info";
import Blok from "./components/Blok";

const App = () => {
  const infoRef = useRef(null);
  const blokRef = useRef(null);

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "100px",
          marginRight: "100px",
          padding: "0",
        }}
      >
        {/* Анимированная бутылка */}
        <Bottle infoRef={infoRef} blokRef={blokRef} />

        {/* Основной заголовок по центру */}
        <Box
          sx={{
            textAlign: "center",
            flexGrow: "1",
            marginTop: "120px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Lilita One",
              fontSize: "300px",
              color: "#5F2B46",
            }}
          >
            NOBLE
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Lilita One",
              fontSize: "300px",
              color: "#983E6E",
            }}
          >
            GRAPES
          </Typography>
        </Box>

        <div ref={infoRef}>
          <Info />
        </div>
        <div ref={blokRef}>
          <Blok />
        </div>
      </Box>
    </>
  );
};

export default App;
