import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/forgot-password`, {
      email, // Include email in the request body
    })
    .then((response) => {
      if(response.data.status) {
        alert("Check your Email for Reset Password Link");
        navigate('/login');
      }
      console.log(response.data);
    })
    .catch((err) => {
      console.log("An Error has Occurred");
    });
  };
    
      return (
        <>
          <div className="container ">
            <div className="row border w-25 mx-auto my-5">
              <div className="col ">
                <form className="px-4 py-2" action="POST">
                  <div className="text-center mb-5">
                    <h2>Forget Passowrd</h2>
                  </div>
                  {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              )}
              {successMessage && (
                <div className="alert alert-success" role="alert">
                  {successMessage}
                </div>
              )}
                  <div className="mb-3">
                    <label
                      for="exampleInputEmail1"
                      className="form-label fw-bolder"
                    >
                      Email ID
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Email ID"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div> */}
                  </div>
               
                  
                  <div className="mb-3">
                    <Link to="/resetpassword">
                      <button
                        type="submit"
                        className="btn btn-primary-dark w-100"
                        onClick={handleLogin}
                      >
                      Forget password
                      </button>
                    </Link>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </>
      );
    };


export default ForgetPassword