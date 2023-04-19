import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";
const CssTextField = styled(TextField)({
  "& .css-yyery5-MuiFormLabel-root-MuiInputLabel-root": {
    color: "lightblue",
  },
  "& label.Mui-focused": {
    color: "#00a3d9",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "blue",
  },
  "& .MuiOutlinedInput-root": {
    background: "black",
    opacity: "0.5",
    color: "white",
    "& fieldset": {
      borderColor: "lightblue",
    },
    "&:hover fieldset": {
      borderColor: "red",
    },
    "&.Mui-focused fieldset": {
      borderColor: "darkblue",
    },
  },
});

const Login = ({ setAuth, t, toggleLoginReg }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { email, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "/api/authentication/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const parseRes = await response.json();

      console.log("parseRes", parseRes);

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        // toast.success("Logged in Successfully");
        navigate("/mycryptolist");
      } else {
        setAuth(false);
        // toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: {xs: "transparent", md: "#19202b"},
        height: {xs: "80%", sm: "50%", md: "50%", lg: "50%", xl: "50%"},
      }}
    >
      <Box
        component="form"
        onSubmit={onSubmitForm}
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        <CssTextField
          fullWidth
          id="custom-css-outlined-input"
          label="Email"
          type="text"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <CssTextField
          fullWidth
          label="Password"
          id="custom-css-outlined-input"
          type="password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PasswordIcon />
              </InputAdornment>
            ),
          }}
        />
        <Box
          sx={{
            // backgroundColor: "blue",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: { xs: "row", sm: "column" },
            alignItems: "center",
            gap: "1rem"
          }}
        >
          <Box>
            <Button color="primary" variant="contained" type="submit">
              Login
            </Button>
          </Box>
          <Box>
            <Button
              color="secondary"
              variant="outlined"
              onClick={toggleLoginReg}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
