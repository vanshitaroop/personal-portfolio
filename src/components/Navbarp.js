import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState } from 'react';
import { useEffect } from 'react';
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg"; 
import "animate.css"
import TrackVisibility from "react-on-screen"
export const Navbarp = () => {
  const [sccrolled, setsccrolled] = useState("false")
  const [activeLink, setactiveLink] = useState("home");
  useEffect(() => {
   const onScroll=()=>{
    if(window.scrollY>50){
      setsccrolled(true);
    }
    else{
      setsccrolled(false);
    }
   }
   window.addEventListener("scroll",onScroll);
   return ()=>{window.removeEventListener("scroll",onScroll)}
  }, []);
  const onUpdateActiveLink =(value)=>{
    setactiveLink(value)
  }
  
    return (
        
      <Navbar expand="md" className={sccrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
        <TrackVisibility>
              {({ isVisible }) =>
          <img src={logo}  style={{width:"110px"}} alt="Logo" className={isVisible?"animate__animated animate__backInUp":""}/>}
          </TrackVisibility>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/vanshita-roopchandani-5943171b8/?original_referer=https%3A%2F%2Fsidhealthcare.com%2F"><img src={navIcon1} alt="" /></a>
              <a href="https://www.facebook.com/vanshita.roopchandani/"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/vanshita_roopchandani/"><img src={navIcon3} alt="" /></a>
            </div>
                <button className="vvd"><span><a  className="test" href="https://www.instagram.com/vanshita_roopchandani/" style={{color:"white"}}>Let’s Connect</a></span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
}
