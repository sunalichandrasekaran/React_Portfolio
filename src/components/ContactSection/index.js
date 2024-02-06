import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <h1 className="logo-text">CONTACT</h1>
      <div className="mail-contact mb-5"></div>
      <div className="mail-contact mb-5">
        <div className="contacts p-4 text-center">
          <i className="fad fa-envelope"></i>{" "}
          <span>sunalichandrasekaran06@gmail.com</span>
        </div>
        <div className="contacts p-4 text-center">
          <i className="fad fa-mobile-alt"></i> <span>+91 8610844080</span>
        </div>
        <div className="contacts p-4 text-center mb-3">
          <i className="fad fa-map-marker-alt"></i>{" "}
          <span>Salem, TamilNadu</span>
        </div>
      </div>
      <div className="footer mt-3">
        <span className="float-left">
          <a
            href="https://github.com/sunalichandrasekaran"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", fontSize: "25px" }}
            className="btn btn-sm "
          >
            <i className="fab fa-github"></i>
          </a>
          &emsp;
          <a
            href="https://www.linkedin.com/in/sunalichandrasekaran-ac/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", fontSize: "25px" }}
            className="btn btn-sm "
          >
            <i className="fab fa-linkedin"></i>
          </a>
          &emsp;
        </span>
        <span>Copyright © 2024. </span>&emsp;{" "}
        <span> All Rights Reserved by Sunali </span>
      </div>
    </div>
  );
}

export default Contact;
