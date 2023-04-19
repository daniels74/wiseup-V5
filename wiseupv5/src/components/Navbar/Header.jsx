import { React } from "react";

//-----------------MUI------------
import { Box, Container, Button } from "@mui/material";
import { BiMenuAltRight } from "react-icons/bi";
import { blue } from "@mui/material/colors";

// components
import Logo from "./Logo";
import Menu from "./Menu";

const Header = ({ isAuthenticated, auth, setAuth, toggleMenu, setToggleMenu }) => {
  // const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
    <Container
      maxWidth={false}
      sx={{
        position: "relative",
        height: "5%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // borderBottom: '1px solid #ddd',
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          // backgroundColor: "red",
          position: "relative",
          height: "100%",
          width: "20%",
          display: "flex",
          flexDirection: "row",
          marginLeft: "0",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box>
          <Logo isAuthenticated={isAuthenticated}/>
        </Box>
      </Box>
      <Box
        sx={{
                position: "relative",
                height: "100%",
                width: "80%",
                display: { xs: "none", sm: "flex" },
              }
        }
      >
        <Menu
          isAuthenticated={isAuthenticated}
          auth={auth}
          setAuth={setAuth}
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
        />
      </Box>
      <Box
        sx={{
          // backgroundColor: "red",
          position: "relative",
          height: "100%",
          width: "80%",
          display: { xs: "flex", sm: "none" },
          flexDirection: "row",
          marginRight: "0",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Box>
          <Button onClick={()=>{setToggleMenu(!toggleMenu)}}>
            <BiMenuAltRight size={35} color={blue[500]} />
          </Button>
        </Box>
      </Box>
    </Container>
    {toggleMenu && <Container maxWidth={false}
    sx={{
      position: "relative",
      height: "95%",
      width: "100%",
      backgroundColor: "black",
      zIndex: "2",
    }}
    >
      <Menu isAuthenticated={isAuthenticated} auth={auth} setAuth={setAuth} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
    </Container>}
    </>
  );
};

export default Header;
