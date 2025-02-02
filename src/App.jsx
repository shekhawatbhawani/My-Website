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
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
function App() {
  let [user , setUser] = useState(null)



  useEffect(()=>{
    const auth = getAuth()
    const stateChange = onAuthStateChanged(auth,(currentUser)=>{
      if (currentUser) {
        setUser(currentUser)
        console.log("User is logged in:", currentUser);
        
      }else {
        setUser(null); // Clear user if not logged in
        console.log("No user is logged in");
      }
    })

    return () => stateChange()
  },[])



  return (
    <BrowserRouter> {/* Wrap the entire app with BrowserRouter */}
      {/* <Navbar/> Navbar will appear on all pages */}

      {user && <Navbar user={user}/> }
      <Routes> {/* Define routes inside Routes */}
        <Route path="/welcome" element={<WelcomePage />} /> {/* Self-closing Route */}
        <Route path="/body" element={<Body/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/" element={<Sign/>}></Route>
        <Route path="/service" element={<ServicePage/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;