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
                {/* <ul className="d-flex">
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
                </ul> */}
              </div>
            </div>
            <div className="col-md-3 footer-content ">
              <p className="footer-heading">Pages</p>
              <ul>
                <li><a href="#home"> Home </a></li>
                <li><a href="#about"> About </a></li>
                <li><a href="#category">Services</a></li>
                <li><Link to="/contactus">Contact Us</Link></li>
                <li><Link to="/contactus">Blogs</Link></li>
              </ul>
            </div>
            <div className="col-md-3 footer-content">
              <ul>
                <p className="footer-heading">Artist</p>
                <ul>
                  <li><Link to="/makeup"> Makeup </Link> </li>
                  <li><Link to="/hairstyle">Hairstyle </Link></li>
                  <li><Link to="/nailart"> Nail Art </Link></li>
                  <li><Link to="/henna"> Henna Art </Link></li>
                  <li><Link to="/fashion"> Fashion </Link></li>
                  <li><Link to="/dance"> Dance </Link></li>
                  <li><Link to="/music"> Music </Link></li>
                  <li><Link to="/paint"> Painting </Link></li>
                  <li><Link to="/writer"> Writer </Link></li>
                  <li><Link to="/teacher"> Special Teacher </Link></li>
                </ul>
              </ul>
            </div>
          </div>
          <div className="row sub-footer">
            <div className="col-md-12">
              <p className="sub-footer-des">
                Copyright © Artify 7 Pro Company Pvt. Ltd All rights reserved 
                <span className="ms-3 "><Link to="/termscondition" className="text-light">Terms & Condition</Link></span>
                 <span className="ms-3"><Link to="/privacypolicy" className="text-light">Privacy Policy</Link></span>
                 <span className="ms-3"><Link to="/refundcancelation" className="text-light">Refund & Cancelation</Link></span>
                
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
