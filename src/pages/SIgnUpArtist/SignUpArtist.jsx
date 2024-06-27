import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import InnerHeading from "../../Components/InnerHeading/InnerHeading";
import Footer from "../../Components/Footer";
import "./SignUpArtist.css"

const SignUpArtist = ({path}) => {
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
      <InnerHeading path={path}/>
      <div className="container signup ">
        {/* content */}
        <div className="row mx-auto my-5">
          <div className="col-md-6" >
          <p><span>Makeup Artists:</span> Our makeup artists are experts in creating flawless, camera-ready looks for any occasion.</p>
            <p><span>Hair Stylists:</span> Our hair stylists are skilled in the latest cutting-edge techniques and trends, delivering bespoke hairstyles that exceed expectations.</p>
            <p><span>Nail Artists:</span> Our nail artists are renowned for their intricate designs and attention to detail, transforming nails into works of art.</p>
            <p><span>Henna Artists:</span> Our henna artists are masters of traditional and contemporary designs, creating temporary body art that's both beautiful and meaningful.</p>
            <p><span>Fashion Designers:</span> Our fashion designers are visionary creators of unique, stylish, and bespoke clothing that reflects your personality and flair.</p>
            <p><span>Musicians:</span> Our musicians are talented performers who deliver captivating shows, from solo performances to ensemble work, that leave a lasting impression.</p>
            <p><span>Dancers:</span> Our dancers are skilled performers who bring energy, grace, and passion to every performance, mesmerizing audiences with their talent.</p>
            <p><span>Writers:</span> Our writers are creative storytellers who craft compelling content that engages, inspires, and resonates with diverse audiences.</p>
            <p><span>Painters:</span> Our painters are visionary artists who bring color, emotion, and depth to every canvas, creating one-of-a-kind masterpieces that inspire and delight.</p>
            <p><span>Makeup Artists:</span>Special Teachers: Our special teachers are dedicated educators who provide personalized support and guidance, empowering students to reach their full potential.</p>
          
          </div>
          <div className="col-md-6 m-auto" style={{background:"white",}}>
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
      <Footer/>
    </>
  );
};

export default SignUpArtist;
