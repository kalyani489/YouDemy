import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        Made by{" "}
        <a href="https://github.com/kalyani489" target="_blank" className="name-us">
          Kalyani
        </a>{" "}
        &{" "}
        <a href="https://github.com/Maheejaiswal" target="_blank" className="name-us">
          Mahee
        </a>
        <div className="contribute-wrapper">
          <a
            href="https://github.com/login" target="_blank"
            className="contribute"
          >
            Contribute <i className="fab fa-github"></i>
          </a>
        </div>
      </p>
    </div>
  );
}

export default Footer;
