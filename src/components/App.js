
import React from "react";
import './../styles/App.css';
import Links from "./Links";
import User from "./User";
import {Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Routes>
          <Route path="/" element={<Links />}   />
          <Route path="/user/:id" element={<User />}/>
        </Routes>
    </div>
  )
}

export default App
