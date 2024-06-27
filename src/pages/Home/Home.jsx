import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import MultiCarousel from "../../Components/MultiCarousel";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer";
import Whatsapp from "../../Components/RequestForm/RequestForm";
import axios from "axios";
import RequestForm from "../../Components/RequestForm/RequestForm";
import data from "../../JSON/ArtistData.json"
import { Link } from "react-router-dom";


const Home = () => {


  const [input ,setInput] = useState("")
  const [result ,setResult] = useState()
  const [url , setUrl] = useState("")

  console.log(input);

  // const jsondata = import ("../../JSON/artistData.json")
  // useEffect(()=>{
  //   fetch("../../JSON/artistData.json")
  //   .then((res)=>res.json())
  //   .then((data)=>console.log(data))
  //   .catch((error)=> console.log(error))
  // })
// console.log(data);
  
const fetchData =(value) =>{

  // const result = data.filter((user)=>{
  //   return user&&user.category&&user.category.toLowerCase().includes(value)
  // })

  setResult(
    data.filter((user)=>{
      return user&&user.category&&user.category.toLowerCase().includes(value)
    })
  )


  console.log(result);
  result.map((one)=>{
    console.log(one.category);
    setUrl(one.category)
  })

}

 
const handleInput = (value) =>{
  setInput(value)
  console.log(input);
  fetchData(value)
}
  

  return (
    <>
      <div className="background position-relative">
        <Header className="position-absolute" />
        {/* <div className="text"> */}
        <section
          className="search-section hero section  dark "
          id="home"
          style={{ height: "", borderBottom: "1px  solid black" }}
        >
          <div className="container hero-container">
            <div
              className="row flex-column align-content-center justify-content-center  "
              // style={{ padding: "150px 0px 70px 0px" }}
            >
              <div className="col-md-10 text-center">
                <form action="">
                <h1 className="text-light">Find The Talent</h1>
                {/* <p
                  className=" mb-5 text-dark text-center"
                  style={{ fontSize: "20px", color: "#ffff" }}
                >
                  Best photographer, video, Editor, Fashion Designer, Painter,
                  Teacher... to go from ideas to outstanding designs
                </p> */}
                </form>
              </div>
              <div className="col-md-6  d-flex align-content-center justify-content-center m-auto ">
                <div
                  className="input-group flex-nowrap"
                  style={{ border: "1px solid #6B5233", borderRadius: "15px"}}
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
                    className="form-control px-4 py-3 border-0 shadow-none"
                    placeholder="Search your creativity"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                    onChange={(e)=> handleInput(e.target.value)}
                  />
                  {

// result.map((one)=>{
//     console.log(one.category);

//   })
}
                  <Link to={'/'+url}

                    className="btn search-btn lh-lg"
                    type="button"
                    id="button-addon1"
                    style={{ borderRadius: " 0px 15px 15px 0px" }}
                    
                  >
                    Search
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

       
        {/* art from section */}

        <section className="section mt-5 artist-carousel-section" id="category">
          <div className="container">
            <div className="row">
              <div className="col carousel-content">
                <h2 className="text-uppercase carousel-title">
                  Our Portfolio
                </h2>
                <h3 className="carosuel-heading">
                Unleash the Creative Storm: Featured Artists Inside
                </h3>
                <p className="carousel-desc ">
                Explore the latest works, trends, and stories from the industry's most innovative minds
                </p>
                <p></p>
              </div>
              <div className="row">
                <div className="col">
                  <MultiCarousel  />
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
          id="about"
          //  style={{ width: "100%" }}
        >
          <div className="container p-4">
            <div className="row ">
              <div
                className="col-md-6 home-talent-left  d-flex justify-content-center align-content-center"
                // style={{ padding: "25px" }}
              >
                <div className="home-about-img">
                  <video muted autoPlay="autoplay" src="/images/home-about-video.mp4" type="video/mp4"></video>
                </div>
              </div>
              <div className="col-md-6 home-talent-right position-relative">
                <h3 className=" mb-4 text-uppercase ">About Us</h3>
                
            
                <p
                  className=""
                  style={{ marginTop: "230px" }}
                >
                  To revolutionize the way artists access opportunities, by providing a professional platform that fosters creativity, collaboration, and success.
                </p>
                
                <p className="">
                Empowering artists to achieve their vision, we connect creativity with professionalism, providing a dynamic platform, expert consulting, and meaningful collaborations, to transform passions into successful careers.
                </p>
                
                <p className="">
                Artify 7 Pro was founded on the belief that artists deserve a platform that supports their creative and professional growth. Our team of experts has curated a unique ecosystem that bridges the gap between talent and opportunity </p>
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
                <h3>Featured Artists Of The Week</h3>
                {/* <p className="text-center">
                Explore the latest works, trends, and stories from the industry's most innovative minds
                </p> */}
              </div>
            </div>
            <div className="row my-4" style={{ height: "" }}>
              <div className="col-md-3" style={{ height: "220px" }}>
                <div className="gallery-card m-0">
                  <img
                    src="./images/gallery/hairs.jpeg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="gallery-text">
                    <p>Hair Style</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="gallery-card m-0">
                  <img
                    src="./images/gallery/gallery.jpeg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="gallery-text">
                    <p>Sheetal Arora</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="gallery-card m-0">
                  <img
                    src="./images/gallery/gallery2.jpeg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="gallery-text">
                    <p>Reet</p>
                  </div>
                </div>
              </div>
            </div>
            {/* row two */}
            <div className="row my-4" style={{ height: "" }}>
              <div className="col-md-4 " style={{ height: "220px" }}>
                <div className="gallery-card m-0">
                  <img
                    src="./images/gallery/makeup.jpeg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="gallery-text">
                    <p>Makeup</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gallery-card m-0">
                  <img
                    src="./images/gallery/nails.jpeg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="gallery-text">
                    <p>Nails</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gallery-card m-0">
                  <img
                    src="./images/gallery/gallery3.jpeg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="gallery-text">
                    <p>Jannat</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-4" style={{ height: "" }}>
              <div className="col-md-6">
                <div className="gallery-card m-0">
                  <img
                    src="./images/gallery/gallery4.jpeg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="gallery-text">
                    <p>Sheetal GIll</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="gallery-card m-0">
                  <img
                    src="./images/gallery/gallery4.jpeg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="gallery-text">
                    <p>Sheetal GIll</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="gallery-card m-0">
                  <img
                    src="./images/gallery/gallery.jpeg"
                    className="gallery-card-img-top"
                    alt="..."
                  />
                  <div className="gallery-text">
                    <p>Sheetal Arora</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
      {/* <RequestForm/> */}
      <RequestForm />
      {/* </div> */}
    </>
  );
};

export default Home;
