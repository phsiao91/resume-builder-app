import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <Link to="/introductions">Summary</Link>
            <Link to="/bios">Bio</Link>
            <Link to="/workhistories">Work History</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/educations">Education</Link>
            {/* <Link to="/tasks">Tasks</Link> */}
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;
