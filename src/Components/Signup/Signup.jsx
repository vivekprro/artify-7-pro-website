import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
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
      <div className="container ">
        <div className="row border w-25 mx-auto my-5">
          <div className="col ">
            <form
              className="px-4 py-2"
              // action="POST"
              // method="POST"
              onSubmit={handleSubmit}
            >
              <div className="text-center mb-5">
                <h2>Create an account</h2> </div>

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
                  // value={userRegistration.username}
                  onChange={(e)=>setName(e.target.value)}
                  // name="username"
                  // onChange={(e) => setName(e.target.value)}
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
                  // value={userRegistration.email}
                  // onChange={handleInput}
                  // name="email"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label fw-bolder"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  // id="exampleInputPassword1"
                  placeholder="Enter Your Password"
                  onChange={(e) => setPassword(e.target.value)}
                  // value={userRegistration.password}
                  // onChange={handleInput}
                  // name="password"
                />
              </div>
              {/* <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label fw-bolder"
                >
                  Confirm Password
                </label>
                <input
                  type="confirm-password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Confirm Password"
                />
              </div> */}

              <div className="mb-3">
                <button type="submit" className="btn btn-primary-dark w-100"  onSubmit={handleSubmit}>
                  Submit
                </button>
              </div>

              {/* <div className="mb-3">
                <button type="button" className="btn btn-secondary w-100">
                  Secondary
                </button>
              </div> */}

              {/* <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label"
                  htmlFor="exampleCheck1"
                  style={{ fontSize: "12px" }}
                >
                  By clicking continue, you agree to our Terms of Service and
                  Privacy Policy
                </label>
              </div> */}
            </form>
            <div className="mb-3">
              <Link to="/login">
                <button type="button " className="btn btn-secondary w-100 ">
                  login ?
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
