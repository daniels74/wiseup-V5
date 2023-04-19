import React from "react";

//UI
import { Box } from "@mui/material";

const CryptoNewsCard = ({ item }) => {
  if (item.image) {
    console.log("news item: ", item);
  }

  return (
    <Box
      sx={{
        borderBottomColor: "black",
        borderBottomStyle: "solid",
        borderWidth: "medium",
        height: "16rem",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "98%",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 25%)",
          gridTemplateRows: "repeat(10, 10%)",
        }}
      >
        <Box
          sx={{
            gridColumnStart: "1",
            gridColumnEnd: "2",
            gridRowStart: "1",
            gridRowEnd: "11",
          }}
        >
          {item.image ? (
            <Box
              // component="img"
              // src={item.image.thumbnail.contentUrl}
              sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={item.image.thumbnail.contentUrl}
                sx={{
                  height: "60%",
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "1rem",
                  borderStyle: "solid",
                  borderColor: "blue",
                  borderWidth: "1px",
                }}
              ></Box>
            </Box>
          ) : (
            <>IMG</>
          )}
        </Box>
        <Box
          sx={{
            gridColumnStart: "2",
            gridColumnEnd: "4",
            gridRowStart: "2",
            gridRowEnd: "5",
            backgroundColor: "#0d455f",
            borderRadius: "1rem",
            borderStyle: "solid",
            borderColor: "blue",
            borderWidth: "thin",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "80%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.name}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            gridColumnStart: "2",
            gridColumnEnd: "5",
            gridRowStart: "6",
            gridRowEnd: "10",
            backgroundColor: "#0d455f",
            borderRadius: "1rem",
            borderStyle: "solid",
            borderColor: "blue",
            borderWidth: "thin",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "95%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.description}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CryptoNewsCard;
