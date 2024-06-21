import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  // State Varibels for Login
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  // Login Function
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const loggedData = JSON.parse(localStorage.getItem("signupData")); // Getting data from local storage and Coverting String into the Object
    if ( loginData.email === loggedData.email && loginData.password === loggedData.password) {
        localStorage.setItem("loggedIn" , true);
        navigate("/");

    }else {
        alert("Invalid Credentials");
    }
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} sx={{ mt: 8, p: 2 }}>
          <Box component="form" onSubmit={handleLoginSubmit} sx={{ mt: 3 }}>
            <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
              Login
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
