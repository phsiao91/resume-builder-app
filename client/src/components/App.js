import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import Bio from "./Bio";
import Skill from "./Skill";
import WorkHistory from "./WorkHistory";
import Intro from "./Intro";
import Education from "./Education";
// import Task from "./Task";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route path="/">
              <Home user={user}/>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/introductions">
              <Intro/>
            </Route>
            <Route path="/educations">
              <Education/>
            </Route>
            <Route path="/bios">
              <Bio/>
            </Route>
            <Route path="/workhistories">
              <WorkHistory/>
            </Route>
            <Route path="/skills">
              <Skill/>
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;
