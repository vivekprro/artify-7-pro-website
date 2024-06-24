import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import MultiCarousel from "../../Components/MultiCarousel";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer";
import Whatsapp from "../../Components/whatsapp-chat/Whatsapp";
import axios from "axios";

const Home = () => {
 

  return (
    <>
      <div className="background position-relative">
        <Header className="position-absolute" />
        {/* <div className="text"> */}
        <section
          className="search-section hero section  dark "
          style={{ height: "", borderBottom: "1px  solid black" }}
        >
          <div className="container hero-container">
            <div
              className="row flex-column align-content-center justify-content-center  "
              // style={{ padding: "150px 0px 70px 0px" }}
            >
              <div className="col-md-10 text-center">
                <h1 className="text-light">Find The Talent</h1>
                {/* <p
                  className=" mb-5 text-dark text-center"
                  style={{ fontSize: "20px", color: "#ffff" }}
                >
                  Best photographer, video, Editor, Fashion Designer, Painter,
                  Teacher... to go from ideas to outstanding designs
                </p> */}
              </div>
              <div className="col-md-6  d-flex align-content-center justify-content-center m-auto ">
                <div
                  className="input-group flex-nowrap"
                  style={{ border: "1px solid #6B5233", borderRadius: "15px" }}
                >
                  <span
                    className="input-group-text border-0 bg-light"
                    id="addon-wrapping"
                    style={{ borderRadius: "15px 0px 0px 15px" }}
                  >
                    <CiSearch
                      size={25}
                      // itemClass="carousel-item-padding-40-px"
                    />
                  </span>

                  <input
                    type="text"
                    className="form-control px-4 py-3 border-0"
                    placeholder="Search your creativity"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                  <button
                    className="btn search-btn"
                    type="button"
                    id="button-addon1"
                    style={{ borderRadius: "15px" }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

       
        {/* art from section */}

        <section className="section mt-5 artist-carousel-section">
          <div className="container">
            <div className="row">
              <div className="col carousel-content">
                <h2 className="text-uppercase carousel-title">
                  Art Forms Collections
                </h2>
                <h3 className="carosuel-heading">
                  Extraordinary, in a nutshell
                </h3>
                <p className="carousel-desc ">
                  Get the inspiration you need with our curated collections and
                  boost your creativity
                </p>
                <p></p>
              </div>
              <div className="row">
                <div className="col">
                  <MultiCarousel />
                </div>
              </div>
            </div>
          </div>

          <video autoPlay muted loop id="artist-carousel-section-background">
            <source src="images/home-video.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </section>

        {/* Home page talent */}

        <section
          className="home-page-talent"
          //  style={{ width: "100%" }}
        >
          <div className="container p-4">
            <div className="row">
              <div
                className="col-md-6 home-talent-left py-5  d-flex justify-content-center align-content-center"
                style={{ padding: "25px" }}
              >
                <div className="home-about-img">
                  <img src="/images/home-about2.jpg" alt="" srcSet="" />
                </div>
              </div>
              <div className="col-md-6 home-talent-right position-relative">
                <h3 className=" mb-4 text-uppercase ">About Us</h3>
                <p
                  className="margin-top-170"
                  // style={{ marginTop: "170px" }}
                >
                  Welcome to Artrio, the premier platform connecting you to a
                  world of artistic talent. Whether you are looking for a
                  musician for your event, a painter for a custom piece, or a
                  digital artist for your next project, we are here to make the
                  connection seamless and inspiring.
                </p>
                <p className="">
                  Artrio was founded on the belief that art should be accessible
                  and appreciated by all. Our journey began with a simple idea:
                  to create a space where artists and clients can connect
                  without the usual barriers. Since our inception, we have grown
                  into a vibrant community that values innovation, expression,
                  and the joy that comes from artistic creation.
                </p>
              </div>
            </div>
          </div>
          {/* <img
              className="talent-image"
              src="/images/home-bg3.jpg"
              alt=""
              style={{ height: "" }}
            /> */}
        </section>
        <section className="section gallery-section py-5">
          <div className="container">
            <div className="row ">
              <div className="col text-center">
                <h3>Designers' faves</h3>
                <p className="text-center">
                  Check out what’s getting the most olés on Freepik right now
                </p>
              </div>
            </div>
            <div className="row my-4" style={{ height: "" }}>
              <div className="col-md-3" style={{ height: "220px" }}>
                <div className="gallery-card m-0">
                  <img
                    src="./images/gallery/singing.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="gallery-text">
                    <p>Experience Music</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="gallery-card m-0">
                  <img
                    src="./images/gallery/dancing.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="gallery-text">
                    <p>Experience Music</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="gallery-card m-0">
                  <img
                    src="./images/gallery/sketching.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="gallery-text">
                    <p>Experience Music</p>
                  </div>
                </div>
              </div>
            </div>
            {/* row two */}
            <div className="row my-4" style={{ height: "" }}>
              <div className="col-md-4 " style={{ height: "220px" }}>
                <div className="gallery-card m-0">
                  <img
                    src="./images/gallery/literature.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="gallery-text">
                    <p>Experience Music</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gallery-card m-0">
                  <img
                    src="./images/gallery/photogaphy.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="gallery-text">
                    <p>Experience Music</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gallery-card m-0">
                  <img
                    src="./images/gallery/swimming.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="gallery-text">
                    <p>Experience Music</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-4" style={{ height: "" }}>
              <div className="col-md-6">
                <div className="gallery-card m-0">
                  <img
                    src="./images/gallery/theater.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="gallery-text">
                    <p>Experience Music</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="gallery-card m-0">
                  <img
                    src="./images/gallery/writing.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="gallery-text">
                    <p>Experience Music</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="gallery-card m-0">
                  <img
                    src="./images/gallery/fashion.jpg"
                    className="gallery-card-img-top"
                    alt="..."
                  />
                  <div className="gallery-text">
                    <p>Experience Music</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
      <Whatsapp />
      {/* </div> */}
    </>
  );
};

export default Home;
