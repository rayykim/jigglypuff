import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const btnStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

function NavBar() {
  function login(e) {
    e.preventDefault();
    window.location = "http://localhost:3000/auth/google";
  }
  const classes = btnStyles();
  return (
    <ul className="navbar">
      <li>
        <a href="Home">Home</a>
      </li>
      <li>
        {/* <a href="Login">Login</a> */}

        <Button
          variant="contained"
          color="secondary"
          onClick={login}
          className={classes.button}
        >
          Login
        </Button>
      </li>
    </ul>
  );
}

export default NavBar;
