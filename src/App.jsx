import React from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Certifications from "./components/Certifications";

const App =()=>{
  return(
    <div className="">
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/>

      {/* <Routes>
        <Route path="/" element={
          <>
          <Home/>
      <About/>
      <Education/>
      <Projects/> */}
      {/* <Certifications/> */}
      {/* <Contact/>
      
      
          </>
        }
        />
      </Routes>
      <Footer/> */}
      {/* <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/project" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes> */}
        
      {/* <Home/>
      <About/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/> */}
    </div>
  )
}

export default App;