import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="h-50vh">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 ">
              <div className="footer-logo">
                <a href="#">
                  <span>artrio</span>
                </a>
              </div>
              <div className="footer-social">
                <ul className="d-flex">
                  <li>
                    <FaFacebookSquare size={30} />
                  </li>
                  <li>
                    <FaPinterestSquare size={30} />
                  </li>
                  <li>
                    <FaInstagramSquare size={30} />
                  </li>
                  <li>
                    <FaYoutubeSquare size={30} />
                  </li>
                  <li>
                    <FaLinkedin size={30} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 footer-content ">
              <p className="footer-heading">Pages</p>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Support</li>
              </ul>
            </div>
            <div className="col-md-3 footer-content">
              <ul>
                <p className="footer-heading">Artist</p>
                <ul>
                  <li>Dancing</li>
                  <li>Singing</li>
                  <li>Architecture</li>
                  <li>Painting</li>
                  <li>Fashion</li>
                  <li>Literature</li>
                </ul>
              </ul>
            </div>
          </div>
          <div className="row sub-footer">
            <div className="col-md-12">
              <p className="sub-footer-des">
                Copyright © Artrio Company Pvt. Ltd All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
