import React, { useState } from "react";
// Importing Components
import NavBar from "./Components/NavBar";
import Home from "./Components/Home"
import Signin from "./Components/Signin"
import Signup from "./Components/Signup"

import UserContext from "./Context/UserContext"

// Importing Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

// Importing firebase
import firebase from "firebase/compat/app"
import "firebase/compat/auth"

import firebaseconfig from "./Config/firebaseconfig"
firebase.initializeApp(firebaseconfig)


function App() {
  const [user, setUser] = useState(null)
  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
