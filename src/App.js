import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import "./App.css";
import Login from "./components/login.component";
import Signup from "./components/signup.component";
import { Slide } from "@mui/material";
const App = () => {
  const [users, setUsers] = useState({});

  const [snack, setSnack] = useState({
    open: false,
    snackText: "",
  });

  const handleClose = () => {
    setSnack({
      open: false,
      snackText: "",
    });
  };

  const signupUsers = (email, password) => {
    if (email in users) {
      alert("exists");
    } else {
      setUsers((state) => ({
        ...state,
        [email]: password,
      }));
      setSnack({
        open: true,
        snackText: "Successfully registered",
      });
    }
  };

  const loginUsers = (email, password) => {
    if (email in users && password === users[email]) {
      setSnack({
        open: true,
        snackText: "Successfully Loged in",
      });
    } else {
      setSnack({
        open: true,
        snackText: "Login failed",
      });
    }
  };

  return (
    <div className="homepage">
      <Signup users={users} signupUsers={signupUsers} />
      <Login users={users} login={loginUsers} />
      <Snackbar
        open={snack.open}
        onClose={handleClose}
        TransitionComponent={Slide}
        message={snack.snackText}
      />
    </div>
  );
};

export default App;
