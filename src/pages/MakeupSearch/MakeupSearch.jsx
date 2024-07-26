  import React, { useEffect, useState } from "react";
// import "./ArtistSearch.css";
import { MdLocationPin } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FiDollarSign } from "react-icons/fi";

import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
// import "./MakeupSearch.css"
import FixedPrice from "../../Components/FilterPrices/FixedPrice";
import Bgvideo from "../../Components/Bgvideo/Bgvideo";
import AskForm from "../../Components/AskForm/AskForm";
import ProfileConnectBtn from "../../Components/ProfileConnectBtn/ProfileConnectBtn";
import Footer from "../../Components/Footer";
import InnerHeading from "../../Components/InnerHeading/InnerHeading";
import axios from "axios";
import AskExpert from "../../Components/AskExpert/AskExpert";
import BookNow from "../../Components/BookNow/BookNow";
// import data from "../../JSON/ArtistData.json"


const MakeupSearch = ({path}) => {

const [data , setData] = useState([])

  //  useEffect( () => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => {
  //       setTimeout(() => {
  //         setData(json)
  //       },2000);
         
  //     })
  //     .catch((error)=>{
  //       console.log(error);
  //     })
  // }, [])

  // useEffect(() => {
   

  //   const fetchData = async () =>{
  //     try {
     
  //      await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //      .then(res => res.json())
  //      .then(data => console.log(data))
  //     } catch (error) {
  //       console.log(error);
  //     }

  //   }
  //   fetchData()

  // }, [])
  

  


 

  return (
    <>
      {/* <Header /> */}

      
      <Bgvideo/>
      <InnerHeading path={path} />
      <section className="artist-search border">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4  artist-filter p-5">
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
                      party make-up
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" name="dancer" id="" />
                      <label htmlFor="" className="fs-5 ms-2 mt-1">
                      airbrush makeup
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" name="dancer" id="" />
                      <label htmlFor="" className="fs-5 ms-2 mt-1">
                      Fashion and editorial make up artists
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" name="dancer" id="" />
                      <label htmlFor="" className="fs-5 ms-2 mt-1">
                      Theatre and performance make up artists
                      </label>
                    </li>
                    {/* <li>
                      <input type="checkbox" name="dancer" id="" />
                      <label htmlFor="" className="fs-5 ms-2 mt-1">
                        Dancer
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" name="dancer" id="" />
                      <label htmlFor="" className="fs-5 ms-2 mt-1">
                        Fashion Artist
                      </label>
                    </li> */}
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
               
             

              </div>
            </div>

            {/* artist search-result */}
            <div className="col-md-8 border p-5">

                 
                      {/* <ul>
                        
                     { data && Array.isArray(data) ? data.map(item=>(  
                     <li key={item.id}>{item.title}</li>
                    )): <li>Loading</li>}
                      
                      
                    </ul>  */}
                
             <Link to="/sheetal" >
             
              <div class="card mb-3 border" style={{ maxWidth: "100%" }}>
                <div class="row g-0">
                 <div class="col-md-3">
                   <div className="artist-profile">
                  <img
                     src="/images/artist-profile/sheetal-arora.jpeg"
                     class="img-fluid rounded-start"
                     alt="..."
                   />
                   </div>
                   
                 </div>
                 <div class="col-md-9">
                   <div class="card-body">
                     <h5 class="card-title">sheetal arora</h5>
                     <p class="">
                       I am Experienced Website Designer & Developer. I
                       Specialized in Front-end and Back-end technology.
                     </p>
                     <div className="artist-location">
                       <MdLocationPin size={25} />
                       <span style={{ marginLeft: "10px" }}>Amritsar, India</span>
                     </div>
                     <p class="card-text">
                      
                     </p>
                     <div className="artist-skills">
                       <ul>
                         <li>Make Up</li>
                         <li>Hair Do’s</li>
                         <li>Shoot Makeup</li>
                       </ul>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             </Link>  
              

             <Link to="/profile" >
              <div class="card mb-3 border" >
                <div class="row g-0">
                  <div class="col-md-3 image-box">
                    <img
                      src="/images/artist-profile/seerat.jpeg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-9">
                    <div class="card-body">
                      <h5 class="card-title">Seerat Gill</h5>
                      <p class="">
                       I am Experienced Website Designer & Developer. I
                        Specialized in Front-end and Back-end technology. 
                       </p> 
                       <div className="artist-location">
                        <MdLocationPin size={25} />
                        <span style={{ marginLeft: "10px" }}>India</span>
                      </div>
                      <p class="card-text"> 
                        <small class="text-body-secondary">
                         
                        </small>
                      </p>
                      <div className="artist-skills">
                       <ul>
                          <li>Facials </li>
                          <li>Makeups</li>
                          <li>Hairdos</li>
                          <li>MongoDb</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
              </Link> 


              {/* <Link to="/profile" >
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
              </Link> */}

            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default MakeupSearch;
