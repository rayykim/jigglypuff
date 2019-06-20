import React from "react";

function NavBar() {
  function login(e) {
    e.preventDefault();
    window.location = "http://localhost:3000/auth/google";
  }
  return (
    <ul className="navbar">
      <li>
        <a href="Home">Home</a>
      </li>
      <li>
        {/* <a href="Login">Login</a> */}
        <button onClick={login} type="submit" className="login_button">
          Login
        </button>
      </li>
    </ul>
  );
}

export default NavBar;
