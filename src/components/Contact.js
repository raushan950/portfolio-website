import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/portfolioimage.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .sendForm(
        "service_sgm7156",   // your EmailJS service ID
        "template_krz8m8q",  // your EmailJS template ID
        form.current,
        "HhqJ409D1AewWbkl_"  // your EmailJS public key
      )
      .then(() => {
        setStatus({ success: true, message: "Message sent successfully!" });
        setButtonText("Send");
        form.current.reset(); // clear form after success
      })
      .catch((error) => {
        console.error("EmailJS Error:", error); // 🔎 will show exact issue
        setStatus({
          success: false,
          message: "Something went wrong: " + (error?.text || "Unknown error"),
        });
        setButtonText("Send");
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>                
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img
                    src={contactImg}
                    alt="Contact Us"
                    style={{ width: "300px", height: "450px", objectFit: "cover", borderRadius: "20px" }}
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>
                    Get In <span className="gradient-text">Touch</span>
                  </h2>
                  <form ref={form} onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone No."
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          placeholder="Message"
                          required
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};