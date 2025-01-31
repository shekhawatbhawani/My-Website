import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Corrected imports
import Navbar from "./Components/Navbar";
import WelcomePage from "./Components/Welcome";
import "./App.css";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import Sign from "./Components/Sign";
import ServicePage from "./Components/Service";
import Footer from "./Components/Footer";


function App() {
  return (
    <BrowserRouter> {/* Wrap the entire app with BrowserRouter */}
      <Navbar /> {/* Navbar will appear on all pages */}
      <Routes> {/* Define routes inside Routes */}
        <Route path="/" element={<WelcomePage />} /> {/* Self-closing Route */}
        <Route path="/body" element={<Body/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/sig-in" element={<Sign/>}></Route>
        <Route path="/service" element={<ServicePage/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;