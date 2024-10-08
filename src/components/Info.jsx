import React from "react";
import { Typography, Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

function Info() {
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
      <Grid item xs={12} md={6}>
        <Box
          style={{
            width: "465px",
            height: "622px",
            display: "flex",
            marginTop: "250px",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          {/* Заголовок для блока с характеристиками */}
          <Typography
            variant="h3"
            style={{
              fontFamily: "Grechen Fuemen",
              fontSize: "36px",
              color: "#262425",
              marginBottom: "24px",
            }}
          >
            Curated Elegance
          </Typography>

          <Typography
            variant="h3"
            style={{
              fontFamily: "Lilita One",
              fontSize: "96px",
              color: "#5F2B46",
              marginBottom: 0,
              lineHeight: "0.5",
              textTransform: "uppercase",
            }}
          >
            France
          </Typography>

          <Typography
            variant="h3"
            style={{
              fontFamily: "Lilita One, sans-serif",
              fontSize: "96px",
              color: "#262425",
              marginBottom: 0,
              textTransform: "uppercase",
            }}
          >
            Ralf Ale
          </Typography>

          {/* Текст */}
          <Typography
            variant="body1"
            style={{
              fontFamily: "Lato",
              marginTop: "16px",
              color: "#262425",
              fontSize: "24px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Amet massa ullamcorper
            scelerisque enim feugiat enim ac&nbsp;vel donec. Aliquet donec
            posuere ut lorem tincidunt egestas blandit a&nbsp;interdum.
            Porttitor risus at lectus enim eget nulla.
          </Typography>

          {/* Кнопка */}
          <Button
            variant="contained"
            style={{
              backgroundColor: "#262425",
              color: "#F5E8DC",
              marginTop: "32px",
              borderRadius: 0,
              fontFamily: "Lilita One",
              textTransform: "uppercase",
              fontSize: "24px",
              padding: "10px 40px",
            }}
          >
            Read More
          </Button>
        </Box>
      </Grid>

      {/*  правый блок таблица */}
      <Grid
        item
        xs={12}
        md={6}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Box
          style={{
            marginTop: "250px",
            width: "380px",
            height: "580px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: "20px",
            border: "3px solid #5F2B46",
          }}
        >
          <Typography
            variant="h4"
            style={{
              fontFamily: "Lilita One",
              fontSize: "30px",
              color: "#262425",
              marginBottom: "8px",
              textTransform: "uppercase",
            }}
          >
            alc
          </Typography>

          <Typography
            variant="body1"
            style={{
              fontFamily: "Lato",
              color: "#262425",
              fontSize: "18px",
            }}
          >
            Posuere donec
          </Typography>

          {/* Горизонтальная линия */}
          <Box
            sx={{
              width: "100%",
              height: "2px",
              backgroundColor: "#262425",
              marginBottom: "8px",
            }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Typography
              variant="h4"
              style={{
                fontFamily: "Lilita One",
                fontSize: "60px",
                color: "#262425",
                textTransform: "uppercase",
              }}
            >
              12,5%
            </Typography>

            <Typography
              variant="body1"
              style={{
                fontFamily: "Lato",
                color: "#262425",
                fontSize: "10px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Ullamcorper sed
              consectetur vestibulum.
            </Typography>
          </Box>

          <Typography
            variant="h4"
            style={{
              fontFamily: "Lilita One",
              fontSize: "30px",
              color: "#262425",
              marginBottom: "8px",
              textTransform: "uppercase",
              marginTop: "32px",
            }}
          >
            year
          </Typography>

          <Typography
            variant="body1"
            style={{
              fontFamily: "Lato",
              color: "#262425",
              fontSize: "18px",
            }}
          >
            Posuere donec
          </Typography>

          {/* Горизонтальная линия */}
          <Box
            sx={{
              width: "100%",
              height: "2px",
              backgroundColor: "#262425",
              marginBottom: "8px",
            }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Typography
              variant="h4"
              style={{
                fontFamily: "Lilita One",
                fontSize: "60px",
                color: "#262425",
                textTransform: "uppercase",
              }}
            >
              1968
            </Typography>

            <Typography
              variant="body1"
              style={{
                fontFamily: "Lato",
                color: "#262425",
                fontSize: "10px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Ullamcorper sed
              consectetur vestibulum.
            </Typography>
          </Box>

          <Typography
            variant="h4"
            style={{
              fontFamily: "Lilita One",
              fontSize: "30px",
              color: "#262425",
              marginTop: "32px",
              marginBottom: "8px",
              textTransform: "uppercase",
            }}
          >
            og
          </Typography>

          <Typography
            variant="body1"
            style={{
              fontFamily: "Lato",
              color: "#262425",
              fontSize: "18px",
            }}
          >
            Posuere donec
          </Typography>

          {/* Горизонтальная линия */}
          <Box
            sx={{
              width: "100%",
              height: "2px",
              backgroundColor: "#262425",
              marginBottom: "8px",
            }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Typography
              variant="h4"
              style={{
                fontFamily: "Lilita One",
                fontSize: "60px",
                color: "#262425",
                textTransform: "uppercase",
              }}
            >
              1.059
            </Typography>

            <Typography
              variant="body1"
              style={{
                fontFamily: "Lato",
                color: "#262425",
                fontSize: "10px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Ullamcorper sed
              consectetur vestibulum.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Info;
