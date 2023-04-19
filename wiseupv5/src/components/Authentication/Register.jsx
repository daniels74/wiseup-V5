import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import { Box } from "@mui/material";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "lightblue",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "blue",
  },
  "& .MuiOutlinedInput-root": {
    background: "grey",
    "& fieldset": {
      borderColor: "lightblue",
    },
    "&:hover fieldset": {
      borderColor: "blue",
    },
    "&.Mui-focused fieldset": {
      borderColor: "darkblue",
    },
  },
});

const Register = ({ setAuth, t, toggleLoginReg }) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { email, password, name } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password, name };
      const response = await fetch(
        "/api/authentication/register",
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
        // toast.success("Register Successfull");
        navigate("/dashboard");
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
        backgroundColor: "#19202b",
        minHeight: "300px",
      }}
    >
      <Box
        component="form"
        onSubmit={onSubmitForm}
        sx={{
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
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => onChange(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />

        {/* Username */}
        <CssTextField
          fullWidth
          id="custom-css-outlined-input"
          label="Username"
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
        {/* Password */}
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
        <Button color="primary" variant="contained" type="submit">
          Register
        </Button>
        <Button color="secondary" variant="contained" onClick={toggleLoginReg}>
          Login Instead
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
