import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  // State variables for Signup
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // Signup Function
  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    // if (signupData.password !== signupData.confirmPassword) {
    //   alert("Passwords do not match");
    //   return;
    // }
    localStorage.setItem("signupData", JSON.stringify(signupData));
    navigate("/form");
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} sx={{ mt: 8, p: 2 }}>
          <Box component="form" onSubmit={handleSignupSubmit} sx={{ mt: 3 }}>
            <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
              Sign Up
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="name"
              value={signupData.name}
              onChange={handleSignupChange}
              autoComplete="username"
              autoFocus
            />
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
              value={signupData.email}
              onChange={handleSignupChange}
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
              value={signupData.password}
              onChange={handleSignupChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default Signup;
