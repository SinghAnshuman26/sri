import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";//, BsYoutube
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          <b>Hi, I'm Shrirakshi K.L.</b><br />
          A C++ Developer passionate about building high-performance backend systems, with expertise in multithreading, machine learning, and agile development.
          I love solving complex problems and mentoring fellow developers. Let's connect and create something great!
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Shrirakshi" target="black">
          <BsGithub />
        </a>
        {/* <a href="" target="black">
          <BsYoutube />
        </a> */}
        <a href="https://instagram.com/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/shrirakshi-k-l-a4bb681b8/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
