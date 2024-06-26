import React from "react";
import "./SheetalProfile.css";
import { IoLocationSharp } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";





const SheetalProfile = () => {
 
  return (
    <>
      <section className="">
        <div className="container-fluid ">
          <div className="row">
            <div className="col">
              <div className="cover-section">
                <img src="./images/artist-profile/sheetal-cover.jpeg" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            {/* profile sidebar start */}
            <div
              className="profile-sidebar border"
              style={{
                // height: "400px",
                width: "500px",
                backgroundColor: "rgb(232, 232, 232)",
              }}
            >
              <div className="profile-sidebar-wrapper text-center">
                <div className="profile-image mx-auto">
                  <img src="./images/artist-profile/sheetal-arora.jpeg" alt="" srcset="" />
                </div>
                <span>Sheetal Arora</span>
                <br />
                <span>Makeup Artist</span>

                <div className="location">
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      <IoLocationSharp />
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      aria-label="Location"
                      aria-describedby="basic-addon1"
                      value="swis city , amritsar, India "
                    />
                    {/* <div class="form-control"
                      placeholder="Username"
                      aria-label="Location"
                      aria-describedby="basic-addon1">
                         Amritsar, India
                      </div> */}
                  </div>
                </div>
                <div className="location">
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                    <IoMailSharp />
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="location">
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                    <IoIosCall />

                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      aria-label="contactus"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="location">
                  <div class="input-group mb-3 form-control d-flex justify-content-between "            
                   aria-label="Username"
                   aria-describedby="basic-addon1">
                    
                    <span>Education</span>
                    <a href="" target="_blank" rel="noopener noreferrer" className="fw-semibold me-4" style={{color:"blue"}}>Add</a>
                  </div>
                </div>
                {/* <div className="location">
                  <div class="input-group mb-3 form-control d-flex justify-content-between "            
                   aria-label="Username"
                   aria-describedby="basic-addon1">
                    
                    <span>Education</span>
                    <a href="" target="_blank" rel="noopener noreferrer" className="fw-semibold me-4" style={{color:"blue"}}>Add</a>
                  </div>
                </div>
                <div className="location">
                  <div class="input-group mb-3 form-control d-flex justify-content-between "            
                   aria-label="Username"
                   aria-describedby="basic-addon1">
                    
                    <span>Education</span>
                    <a href="" target="_blank" rel="noopener noreferrer" className="fw-semibold me-4" style={{color:"blue"}}>Add</a>
                  </div>
                </div>
                <div className="location">
                  <div class="input-group mb-3 form-control d-flex justify-content-between "            
                   aria-label="Username"
                   aria-describedby="basic-addon1">
                    
                    <span>Education</span>
                    <a href="" target="_blank" rel="noopener noreferrer" className="fw-semibold me-4" style={{color:"blue"}}>Add</a>
                  </div>
                </div> */}
                <div className="location">
                  <div class="input-group mb-3 form-control d-flex justify-content-between "            
                   aria-label="Username"
                   aria-describedby="basic-addon1"
                   style={{height:"150px"}}
                   >
                    
                    <span>Short Description about yourself</span>
                    </div>
                </div>
                
              </div>


              {/* ask form */}

              <div className="ask-expert">
                <span>
                 <Link to="/askform">
                 <span className="btn btn-primary-dark">

                  Ask  to Expert
                  </span>
                 </Link>
                  




                </span>
              </div>

            </div>

            {/* profile sidebar end  */}

            
            <div className="profile-project-area">
            
            
                <div className="profile-projetcs-container">
                  {/* profile work tab */}
                  <div className="profile-work-tabs">
                  <div className="work-tabs">
              <ul className="d-flex gap-4 my-2  align-items-center">
                <li>
                  <div className="work-tab fs-5 fw-bolder rounded p-2">
                    Work
                  </div>
                </li>
                <li>
                  <div className="work-tab fs-5 fw-bolder rounded p-2">
                    Work
                  </div>
                </li>
                <li>
                  <div className="work-tab fs-5 fw-bolder rounded p-2">
                    Work
                  </div>
                </li>
                <li>
                  <div className="work-tab fs-5 fw-bolder rounded p-2">
                    Work
                  </div>
                </li>
                <li>
                  <div className="work-tab fs-5 fw-bolder rounded p-2">
                    Work
                  </div>
                </li>
              </ul>
            </div>
                  </div>


                {/* all project section */}
                <div className="profile-project-wrapper">
                <div className="profile-project-contaianer">
                        <img src="/images/work-images/painting.jpg" alt="" srcset="" />
                        <div className="project-content">
                      <h2>Project Name</h2>
                      <p>Artist Name</p>
                    </div>
                    </div>

                    <div className="profile-project-contaianer">
                        <img src="/images/work-images/painting.jpg" alt="" srcset="" />
                        <div className="project-content">
                      <h2>Project Name</h2>
                      <p>Artist Name</p>
                    </div>
                    </div>
                    
                    <div className="profile-project-contaianer">
                        <img src="/images/work-images/painting.jpg" alt="" srcset="" />
                        <div className="project-content">
                      <h2>Project Name</h2>
                      <p>Artist Name</p>
                    </div>
                    </div>
                   
                </div>

                {/* create project section */}

                <div className="create-project">
                <FaCirclePlus 
                size={70} />

                <button className="btn btn-primary-dark">Create Post</button>
                </div>
                   
                </div>
            </div>
          </div>
        </div>

        {/* profile sidebar */}



      
      </section>
    </>
  );
};

export default SheetalProfile;
