import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false); // Close mobile menu after clicking
  }

  return (
    <Router>
      <Navbar 
        expand="md" 
        className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </Navbar.Toggle>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                href="#home" 
                className={activeLink === 'home' ? 'active nav-link-custom' : 'nav-link-custom'} 
                onClick={() => onUpdateActiveLink('home')}
              >
                <span className="link-text">Home</span>
                <span className="link-indicator"></span>
              </Nav.Link>
              
              <Nav.Link 
                href="#skills" 
                className={activeLink === 'skills' ? 'active nav-link-custom' : 'nav-link-custom'} 
                onClick={() => onUpdateActiveLink('skills')}
              >
                <span className="link-text">Skills</span>
                <span className="link-indicator"></span>
              </Nav.Link>
              
              <Nav.Link 
                href="#projects" 
                className={activeLink === 'projects' ? 'active nav-link-custom' : 'nav-link-custom'} 
                onClick={() => onUpdateActiveLink('projects')}
              >
                <span className="link-text">Projects</span>
                <span className="link-indicator"></span>
              </Nav.Link>
            </Nav>
            
            <span className="navbar-text">
              <div className="social-icons">
                <a 
                  href="https://www.linkedin.com/in/raushan-kumar-dev/" 
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img src={navIcon1} alt="" />
                </a>
                <a 
                  href="https://github.com/raushan950" 
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <img src={navIcon2} alt="" />
                </a>
              </div>
              
              <HashLink to='#connect' className="connect-link">
                <button className="connect-btn">
                  <span>Let's Connect</span>
                  <svg className="btn-arrow" viewBox="0 0 24 24" width="18" height="18">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};