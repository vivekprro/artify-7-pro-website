import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className="h-50vh">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 ">
              <div className="footer-logo">
                <a href="#">
                  <span>Artify 7 Pro</span>
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
                <li><a href="#home"> Home </a></li>
                <li><a href="#about"> About </a></li>
                <li><Link to="/signup">Services</Link></li>
                <li><Link to="/signup">Contact</Link></li>
              </ul>
            </div>
            <div className="col-md-3 footer-content">
              <ul>
                <p className="footer-heading">Artist</p>
                <ul>
                  <li><Link> Makeup </Link> </li>
                  <li><Link>Hairstyle </Link></li>
                  <li><Link> Nail Art </Link></li>
                  <li><Link> Henna Art </Link></li>
                  <li><Link> Fashion </Link></li>
                  <li><Link> Dance </Link></li>
                  <li><Link> Music </Link></li>
                  <li><Link> Painting </Link></li>
                  <li><Link> Writing </Link></li>
                  <li><Link> Teacher </Link></li>
                </ul>
              </ul>
            </div>
          </div>
          <div className="row sub-footer">
            <div className="col-md-12">
              <p className="sub-footer-des">
                Copyright © Artify 7 Pro Company Pvt. Ltd All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
