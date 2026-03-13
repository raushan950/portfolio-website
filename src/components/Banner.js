import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle, Download, Code } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const toRotate = ["Software Developer", "FullStack Developer"];

  // constant speeds
  const typingSpeed = 500;
  const deletingSpeed = 150;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];

    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(deletingSpeed);
    } else {
      setDelta(typingSpeed);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <section className="banner" id="home">
      {/* Animated background elements */}
      <div className="banner-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: `linear-gradient(135deg, #AA367C, #4A2FBD)`,
            }}
          />
        ))}
      </div>

      {/* Parallax glow effect */}
      <div 
        className="banner-glow"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />

      <Container>
        <Row className="align-items-center banner-row">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInUp banner-content" : "banner-content"
                  }
                >
                  <div className="tagline-wrapper">
                    <span className="tagline">
                      <span className="tagline-icon">✨</span>
                      Welcome to my Portfolio
                    </span>
                  </div>
                  
                  <h1>
                    <span className="greeting">Hi! I'm</span>
                    <span className="name"> Raushan Kumar</span>
                    <span className="role-wrapper">
                      <span className="role-prefix">I'm a </span>
                      <span className="txt-rotate">
                        <span className="wrap">{text}</span>
                      </span>
                    </span>
                  </h1>

                  <div className="description-wrapper">
                    <p>
                      I'm a dedicated and fast-learning developer with a strong foundation in 
                      <span className="highlight"> C++</span>, 
                      <span className="highlight"> Data Structures & Algorithms</span>, and core 
                      <span className="highlight"> Computer Science</span> concepts. I'm currently building 
                      expertise in frontend development using 
                      <span className="highlight"> HTML, CSS, JavaScript, and React</span>, and exploring 
                      <span className="highlight"> Node.js</span> for backend development.
                    </p>
                    
                    <div className="feature-list">
                      <div className="feature-item">
                        <Code className="feature-icon" />
                        <span>Clean Code</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">⚡</span>
                        <span>Problem Solving</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">🚀</span>
                        <span>Scalable Apps</span>
                      </div>
                    </div>
                  </div>

                  <div className="button-wrapper">
                    <button
                      className="download-btn"
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/12QYEVJJepM-LhIkwidvdeNFZifjj5KSh/view?usp=sharing"
                        )
                      }
                    >
                      <span>Download CV</span>
                      <Download className="btn-icon" />
                      <div className="btn-glow"></div>
                    </button>
                    
                    <a href="#connect" className="connect-link-banner">
                      <span>Let's Talk</span>
                      <ArrowRightCircle className="connect-icon" />
                    </a>
                  </div>

                  <div className="stats-mini">
                    <div className="stat-mini-item">
                      <span className="stat-mini-value">2+</span>
                      <span className="stat-mini-label">Years Learning</span>
                    </div>
                    <div className="stat-mini-item">
                      <span className="stat-mini-value">16+</span>
                      <span className="stat-mini-label">Technologies</span>
                    </div>
                    <div className="stat-mini-item">
                      <span className="stat-mini-value">∞</span>
                      <span className="stat-mini-label">Passion</span>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn image-wrapper" : "image-wrapper"
                  }
                >
                  <div className="image-container">
                    <div className="image-glow"></div>
                    <div className="image-ring"></div>
                    <img src={headerImg} alt="Header Img" />
                    
                    {/* Floating tech badges */}
                    <div className="tech-badge badge-1">React</div>
                    <div className="tech-badge badge-2">Node.js</div>
                    <div className="tech-badge badge-3">MongoDB</div>
                    <div className="tech-badge badge-4">DSA</div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};