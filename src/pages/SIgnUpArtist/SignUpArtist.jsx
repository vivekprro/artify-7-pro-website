import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import "./SignUpArtist.css"

const SignUpArtist = () => {
  // const history = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

 
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email ,password);
    
    


    axios.post("http://localhost:8081/auth/signup", {
      name,
      email,
      password,
      
    })
    .then((response) => {
      if (response.data.status) {
        setSuccessMessage("Signup Successful! Redirecting to login...");
        setErrorMessage("");
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setErrorMessage(response.data.message || "An error occurred during signup.");
        setSuccessMessage("");
      }
    })
    .catch((err) => {
      setErrorMessage("Already Registered");
      setSuccessMessage("");
    });
  };



 

  return (
    <>
      <video autoPlay loop id="myVideo">
        <source src="./images/home-video.mp4" type="video/mp4" />
      </video>
      <div className="container signup ">
        <div className="row mx-auto my-5">
          <div className="col-md-4 m-auto " style={{background:"white"}}>
            <form
              className="px-4 py-2"
              // action="POST"
              // method="POST"
              onSubmit={handleSubmit}
            >
              <div className="text-center mb-5">
                <h2>Create an account for artist</h2> </div>

                {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          
               <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fw-bolder"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Name"
                  onChange={(e)=>setName(e.target.value)}
                
                 
                />
              </div> 
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fw-bolder"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Name"
                  onChange={(e)=>setName(e.target.value)}
                
                 
                />
              </div> 
              
              <div className="mb-3 fw-bolder">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email ID
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Email ID"
                  onChange={(e) => setEmail(e.target.value)}
                  
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fw-bolder"
                >
                  Category
                </label>
                <select className="ms-2 form-control" name="" id="">
                <option value="" selected disabled hidden>Choose Catagory</option>
                  <option value="makeup-artist">Makeup Artist</option>
                  <option value="makeup-artist">Hair Stylish</option>
                  <option value="makeup-artist">Nail Artist</option>
                  <option value="makeup-artist">Henna Artist</option>
                  <option value="makeup-artist">Fashion Designer</option>
                  <option value="makeup-artist">Dancer</option>
                  <option value="makeup-artist">Musician</option>
                  <option value="makeup-artist">Painting</option>
                  <option value="makeup-artist">Writer</option>
                  <option value="makeup-artist">Special Teacher</option>
                </select>
              </div> 
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fw-bolder"
                >
                  Bio
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Name"
                  onChange={(e)=>setName(e.target.value)}
                
                 
                />
              </div>
              
         
              <div className="mb-3">
                <button type="submit" className="btn btn-primary-dark w-100"  onSubmit={handleSubmit}>
                  Submit
                </button>
              </div>

          

             
            </form>
            {/* <div className="mb-3">
              <Link to="/login">
                <button type="button " className="btn btn-secondary w-100 ">
                  login ?
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpArtist;
