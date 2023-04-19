import { React} from "react";
import { useNavigate } from "react-router-dom";

//---------UI------------------
import { Box, Button } from "@mui/material";

const Menu = ({ toggleMenu, setToggleMenu }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        color: "white",
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box>
        <Button
          onClick={() => {
            setToggleMenu(false);
            navigate("/");
          }}
        >
          Landing
        </Button>
      </Box>
    </Box>
  );
};

export default Menu;
