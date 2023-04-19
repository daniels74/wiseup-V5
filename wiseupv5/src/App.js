import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";

// UI
import { Box, createTheme, ThemeProvider } from "@mui/material";
import "./App.css";

// Components
import Landing from "./pages/Landing/Landing";
//import MyCryptoList from "./pages/MyCryptoList/MyCryptoList";
import Header from "./components/Navbar/Header";
// import Cutz from "./pages/Cutz/Cutz";
// import Profile from "./pages/profile/Profile";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#224173",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function App() {

  // Menu toggler
  const [toggleMenu, setToggleMenu] = useState(false);
  // crypto checkList 
  // const [checkList, setCheckList] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#032029",
          color: "white",
          height: "100vh",
          width: "100vw",
          position: "relative",
        }}
      >
        <Header
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              toggleMenu ? (
                <></>
              ) : (
                <Landing />
              )
            }
          />
          {/* <Route
            exact
            path="/mycryptolist"
            element={toggleMenu ? <></> : <MyCryptoList checkList={checkList} setCheckList={setCheckList} />}
          />

          <Route exact path="/cutz" element={toggleMenu ? <></> : <Cutz />} />

          <Route
            exact
            path="/profile/:id"
            element={toggleMenu ? <></> : <Profile checkList={checkList} setCheckList={setCheckList} />}
          /> */}
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
