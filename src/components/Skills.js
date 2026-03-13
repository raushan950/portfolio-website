import meter1 from "../assets/img/c++.jpg";
import meter2 from "../assets/img/c.jpg";
import meter3 from "../assets/img/java.png";
import meter4 from "../assets/img/html.png";
import meter5 from "../assets/img/css.png";
import meter6 from "../assets/img/tailwind css.png";
import meter7 from "../assets/img/js.jpg";
import meter8 from "../assets/img/reactjs.jpg";
import meter9 from "../assets/img/nodejs.jpg";
import meter10 from "../assets/img/express.jpg";
import meter11 from "../assets/img/mongo.jpg";
import meter12 from "../assets/img/dsa.png";
import meter13 from "../assets/img/opps.jpg";
import meter14 from "../assets/img/sql.jpg";
import meter15 from "../assets/img/git.png";
import meter16 from "../assets/img/github.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { useEffect, useRef, useState } from 'react';

export const Skills = () => {
  const [glowIndex, setGlowIndex] = useState(0);
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2
    }
  };

  const skills = [
    { id: 1, img: meter1, name: "C++" },
    { id: 2, img: meter2, name: "C" },
    { id: 3, img: meter3, name: "Java" },
    { id: 4, img: meter4, name: "HTML5" },
    { id: 5, img: meter5, name: "CSS3" },
    { id: 6, img: meter6, name: "Tailwind" },
    { id: 7, img: meter7, name: "JavaScript" },
    { id: 8, img: meter8, name: "React" },
    { id: 9, img: meter9, name: "Node.js" },
    { id: 10, img: meter10, name: "Express" },
    { id: 11, img: meter11, name: "MongoDB" },
    { id: 12, img: meter12, name: "DSA" },
    { id: 13, img: meter13, name: "OOP" },
    { id: 14, img: meter14, name: "SQL" },
    { id: 15, img: meter15, name: "Git" },
    { id: 16, img: meter16, name: "GitHub" }
  ];

  // Glowing effect animation
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIndex((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section className="skill" id="skills">
      {/* Background elements */}
      <img className="background-image-left" src={colorSharp} alt="" />
      
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p className="skill-description">
                Technologies and tools I work with
              </p>
              
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                pauseOnHover={true}
                transitionDuration={800}
                arrows={true}
                containerClass="skill-slider"
                itemClass="skill-item"
              >
                {skills.map((skill, index) => (
                  <div 
                    key={skill.id} 
                    className={`item ${index === glowIndex ? 'glowing' : ''}`}
                  >
                    <div className="skill-card">
                      <img src={skill.img} alt={skill.name} />
                      <h5>{skill.name}</h5>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};