// App.js
import React, { useState } from "react";
import { Container, Tabs, Tab, Paper } from "@mui/material";
import Login from "./Login";
import Signup from "./Signup";

function From() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ mt: 8, p: 2 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>
        {activeTab === 0 && (
          // Login Here
          <Login />
        )}
        {activeTab === 1 && (
          // /* Sign Up  */
          <Signup />
        )}
      </Paper>
    </Container>
  );
}

export default From;
