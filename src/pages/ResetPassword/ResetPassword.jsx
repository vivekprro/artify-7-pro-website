import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



const ResetPassword = () => {

   
      // const history = useNavigate();
      const [email, setEmail] = useState("");
      const [errorMessage, setErrorMessage] = useState("");
      const [successMessage, setSuccessMessage] = useState("");
    
    
    
      const navigate = useNavigate();
    
      axios.defaults.withCredentials = true;
    
      const handleLogin = (e) => {
        e.preventDefault();
        setErrorMessage(""); // Reset error message
        setSuccessMessage(""); // Reset success message
    
       
        axios.post('http://localhost:8081/auth/login', {
          email,
          password,
        }).then((response) => {
          if (response.data.status) {
            setSuccessMessage("Login successful! Redirecting to dashboard...");
            setTimeout(() => {
              navigate('/profile');
            }, 2000); // Redirect after 2 seconds
          }
        }).catch((err) => {
          if (err.response && err.response.data.message) {
            setErrorMessage(err.response.data.message);
          } else {
            setErrorMessage("An error has occurred. Please try again.");
          }
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
                  for="exampleInputPassword1"
                  className="form-label fw-bolder"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Password"
                  onChange={(e) => setPasssword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  for="exampleInputPassword1"
                  className="form-label fw-bolder"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Re-Enter Password"
                  onChange={(e) => setPasssword(e.target.value)}
                />
              </div>
               
                  
                  <div className="mb-3">
                    <Link to="/artist">
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


export default ResetPassword