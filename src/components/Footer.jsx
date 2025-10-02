import { useRef } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaPhone,
  FaLinkedin,
} from "react-icons/fa";

import emailjs from "emailjs-com";
const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ygt5qzx",      // 🔁 Replace with your actual service ID
        "template_a1w5kto",      // 🔁 Replace with your actual template ID
        form.current,
        "xw4IpXu_RZI9LJnJ0"       // 🔁 Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Error sending message.");
        }
      );

    e.target.reset(); // Clear the form
  };



  return (
    <footer
      className="footer-section py-5 mt-5"
      style={{ backgroundColor: "#fff8ee" }}
    >
      <div className="container text-center">
        {/* Title */}
        <h2
          className="mb-4"
          style={{
            fontFamily: "Cormorant SC, serif",
            fontSize: "32px",
            fontWeight: "600",
          }}
        >
          Take a Coffee & Chat with me
        </h2>

        {/* Contact Form */}
        <div
          className="card shadow-sm mx-auto"
          style={{
            maxWidth: "600px",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <div className="card-body">
            <form ref={form} onSubmit={sendEmail}>
              <div className="row mb-3" id="form">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name *"
                    name="name"
                    required
                  />
                </div>
                <div className="col" id="email_coloum">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email *"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject *"
                  name="title"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Your message *"
                  required
                  name="message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn w-25"
                style={{
                  backgroundColor: "#f4b342",
                  border: "none",
                  fontWeight: "500",
                  boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-4">
          <div className="d-flex justify-content-center gap-4 mb-3 fs-5">
            <a href="mailto:gautamcoe015@gmail.com" className="text-dark">
              <FaEnvelope />
            </a>
            <a href="https://github.com/GoutamArya15" className="text-dark">
              <FaGithub />
            </a>
            <a href="tel:+917015896174" className="text-dark">
              <FaPhone />
            </a>
            <a href="#" className="text-dark">
              <FaInstagram />
            </a>
            <a href="linkedin.com/in/goutam-topra-kalan-2b8215274" className="text-dark">
              <FaLinkedin />
            </a>
          </div>
          <p className="text-muted small mb-0">Copyright © 2025 Gautam Arya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





