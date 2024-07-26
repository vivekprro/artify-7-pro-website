import React from "react";
import { MdLocationPin } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
// import"./Writeart.css"
import FixedPrice from "../../Components/FilterPrices/FixedPrice";
import Footer from "../../Components/Footer";
import InnerHeading from "../../Components/InnerHeading/InnerHeading";
import AskExpert from "../../Components/AskExpert/AskExpert";
import BookNow from "../../Components/BookNow/BookNow";

const Writeart = ({path}) => {

  return (
    <>
      {/* <Header /> */}
      <video autoPlay loop id="myVideo">
        <source src="./images/home-video.mp4" type="video/mp4" />
      </video>
      <InnerHeading path={path}/>
      <section className="artist-search">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3  artist-filter p-5">
              <h2 className="mb-4">Filter</h2>
              <div className="filter-by-art ">
                <div className="filter-header  d-flex justify-content-between align-items-end mb-3">
                  <span className="d-inline-block fs-5 fw-bolder">Artist</span>
                  <span
                    className="artist clear-btn fs-5 fw-semibold"
                    style={{ color: "blue" }}
                  >
                    Clear
                  </span>
                </div>

                <div className="artist-search d-flex border p-2 rounded-pill mb-4">
                  <CiSearch
                    size={30}
                    // itemClass="carousel-item-padding-40-px"
                  />
                  <input
                    type="search"
                    name="search"
                    id=""
                    className="w-100 border-0 ms-4"
                    placeholder="Search Artist"
                  />
                </div>
                <div className="artist-inputs  ">
                  <ul className="ms-3">
                    <li>
                      <input type="checkbox" name="dancer" id="" />
                      <label htmlFor="" className="fs-5 ms-2">
                      Fiction
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" name="dancer" id="" />
                      <label htmlFor="" className="fs-5 ms-2 mt-1">
                      Non-Fiction
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" name="dancer" id="" />
                      <label htmlFor="" className="fs-5 ms-2 mt-1">
                      Poetry
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" name="dancer" id="" />
                      <label htmlFor="" className="fs-5 ms-2 mt-1">
                      Screenwriting
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" name="dancer" id="" />
                      <label htmlFor="" className="fs-5 ms-2 mt-1">
                      Playwriting
                      </label>
                    </li>
                  </ul>
                </div>

                <div className="filter-header  d-flex justify-content-between align-items-end mb-3 mt-4">
                  <span className="d-inline-block fs-5 fw-bolder">
                    Location
                  </span>
                  <span
                    className="artist clear-btn fs-5 fw-semibold"
                    style={{ color: "blue" }}
                  >
                    Clear
                  </span>
                </div>
                <div className="artist-search d-flex border p-2  mb-4">
                  {/* <CiSearch
                    size={30}
                    // itemClass="carousel-item-padding-40-px"
                  /> */}
                  <input
                    type="search"
                    name="search"
                    id=""
                    className="w-100 border-0"
                    placeholder="Enter Location"
                  />
                </div>
                <FixedPrice/>
                <div className="row my-4">
                      <div className="col"><AskExpert/></div>
                      <div className="col"><BookNow/></div>
                       
                      
                    </div>
                {/* <div className="filter-header  d-flex justify-content-between align-items-end mb-3 mt-4">
                  <span className="d-inline-block fs-5 fw-bolder">
                    Project Type
                  </span>
                  <span
                    className="artist clear-btn fs-5 fw-semibold"
                    style={{ color: "blue" }}
                  >
                    Clear
                  </span>
                </div>
                <div className="artist-inputs  ">
                  <ul className="ms-3">
                    <li>
                      <input type="checkbox" name="dancer" id="" />
                      <label htmlFor="" className="fs-5 ms-2">
                        Hourly Rate
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" name="dancer" id="" />
                      <label htmlFor="" className="fs-5 ms-2 mt-1">
                        Fixed Price
                      </label>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>

            {/* artist search-result */}
            <div className="col-md-9 border p-5">
              <Link to="/profile" >
             
              <div class="card mb-3 border" style={{ maxWidth: "100%" }}>
                <div class="row g-0">
                  <div class="col-md-3">
                    <img
                      src="/images/artist-profile/profile.jpeg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-9">
                    <div class="card-body">
                      <h5 class="card-title">Himanshu Rawat</h5>
                      <p class="">
                        I am Experienced Website Designer & Developer. I
                        Specialized in Front-end and Back-end technology.
                      </p>
                      <div className="artist-location">
                        <MdLocationPin size={25} />
                        <span style={{ marginLeft: "10px" }}>India</span>
                      </div>
                      <p class="card-text">
                        {/* <small class="text-body-secondary">
                          Last updated 3 mins ago
                        </small> */}
                      </p>
                      <div className="artist-skills">
                        <ul>
                          <li>javascript</li>
                          <li>ReactJS</li>
                          <li>NodeJs</li>
                          <li>MongoDb</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Link>

              <Link to="/profile" >
              <div class="card mb-3 border" style={{ maxWidth: "100%" }}>
                <div class="row g-0">
                  <div class="col-md-3 image-box">
                    <img
                      src="/images/artist-profile/profile2.jpg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-9">
                    <div class="card-body">
                      <h5 class="card-title">Himanshu Rawat</h5>
                      <p class="">
                        I am Experienced Website Designer & Developer. I
                        Specialized in Front-end and Back-end technology.
                      </p>
                      <div className="artist-location">
                        <MdLocationPin size={25} />
                        <span style={{ marginLeft: "10px" }}>India</span>
                      </div>
                      <p class="card-text">
                        {/* <small class="text-body-secondary">
                          Last updated 3 mins ago
                        </small> */}
                      </p>
                      <div className="artist-skills">
                        <ul>
                          <li>javascript</li>
                          <li>ReactJS</li>
                          <li>NodeJs</li>
                          <li>MongoDb</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Link>


              <Link to="/profile" >
              <div class="card mb-3 border" style={{ maxWidth: "100%" }}>
                <div class="row g-0">
                  <div class="col-md-3">
                    <img
                      src="/images/artist-profile/profile4.jpeg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-9">
                    <div class="card-body">
                      <h5 class="card-title">ALina joe</h5>
                      <p class="">
                        I am ExperiencedFashion Designer I Specialized in
                        Front-end and Back-end technology.
                      </p>
                      <div className="artist-location">
                        <MdLocationPin size={25} />
                        <span style={{ marginLeft: "10px" }}>India</span>
                      </div>
                      <p class="card-text">
                        {/* <small class="text-body-secondary">
                          Last updated 3 mins ago
                        </small> */}
                      </p>
                      <div className="artist-skills">
                        <ul>
                          <li>skill 1</li>
                          <li>skill 2</li>
                          <li>skill 3</li>
                          <li>skill 4</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Link>

            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Writeart;
