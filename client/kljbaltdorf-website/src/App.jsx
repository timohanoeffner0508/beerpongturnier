import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import NewMember from "./pages/NewMember.jsx";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/ueber" element={<AboutUs />} />
  <Route path="/mitglied-werden" element={<NewMember />} />
  <Route path="/kontakt" element={<Contact />} />
</Routes>
    </div>
  );
}

export default App;
