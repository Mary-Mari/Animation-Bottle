import React from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

function Blok() {
  return (
    <Grid
      container
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
        marginTop: "50px",
      }}
    >
      {/* Центрирование заголовка внутри его контейнера */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "150px",
        }}
      >
        <Typography
          variant="h2"
          style={{
            fontFamily: "Lilita One",
            fontSize: "150px",
            color: "#5F2B46",
            textAlign: "center",
          }}
        >
          MOUTEFEELS
        </Typography>
      </Box>

      {/* Левый блок */}
      <Grid
        item
        style={{
          flex: "0 1 40%",
          maxWidth: "40%",
        }}
      >
        <Box
          style={{
            width: "430px",
            height: "580px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginTop: "100px",
          }}
        >
          <Typography
            variant="body1"
            style={{
              fontFamily: "Lato",
              marginTop: "64px",
              color: "#262425",
              fontSize: "20px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Amet massa ullamcorper
            scelerisque enim feugiat enim ac vel donec. Aliquet donec posuere ut
            lorem tincidunt egestas blandit a interdum. Porttitor risus at
            lectus enim eget nulla.
          </Typography>

          <Grid container mt={4}>
            <Grid item>
              <Typography
                style={{
                  fontFamily: "Lato",
                  marginTop: "16px",
                  color: "#262425",
                  fontSize: "28px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  marginBottom: "16px",
                }}
              >
                Style
              </Typography>

              <Typography
                style={{
                  fontFamily: "Lato",
                  marginTop: "16px",
                  color: "#262425",
                  fontSize: "14px",
                  marginBottom: "150px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
                sed velit id vel lacus tortor lobortis in. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Illo maiores dolorum
                aperiam officia et facere iure explicabo asperiores fugit
                dolores nulla quia quibusdam corrupti minima aspernatur, quos
                repellendus neque voluptate.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      {/* Правый блок */}
      <Grid
        item
        style={{
          flex: "0 1 30%",
          maxWidth: "25%",
          display: "flex",
          alignItems: "flex-start",
          marginTop: "40px",
          marginRight: "0",
        }}
      >
        <Box
          style={{
            position: "relative",
            width: "100%",
            height: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            marginTop: "134px",
          }}
        >
          {/* Картинка */}
          <Box
            component="img"
            src="/Rectangle.png"
            alt="Пример изображения"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />

          {/* Текст под картинкой */}
          <Typography
            variant="body1"
            style={{
              fontFamily: "Grechen Fuemen",
              marginTop: "16px",
              color: "#262425",
              fontSize: "16px",
              textAlign: "left",
              marginBottom: "100px",
            }}
          >
            "Sunt, iusto dignissimos"
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Blok;
