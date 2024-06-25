import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"
import Footer from "../Footer";

const Login = () => {
  // const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message
    setSuccessMessage(""); // Reset success message

    axios
      .post("http://localhost:8081/auth/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.status) {
          setSuccessMessage("Login successful! Redirecting to dashboard...");
          setTimeout(() => {
            navigate("/profile");
          }, 2000); // Redirect after 2 seconds
        }
      })
      .catch((err) => {
        if (err.response && err.response.data.message) {
          setErrorMessage(err.response.data.message);
        } else {
          setErrorMessage("An error has occurred. Please try again.");
        }
      });
  };

  return (
    <>
    <video autoPlay loop id="myVideo">
        <source src="./images/home-video.mp4" type="video/mp4" />
      </video>
      <div className="container login">
        <div className="row  mx-auto my-auto align-items-center h-100">
          <div className="col-md-4 m-auto " style={{background:"white"}}>
            <form className="px-4 py-2" action="POST">
              <div className="text-center mb-5">
                <h2>Login</h2>
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
                <Link to="/artist">
                  <button
                    type="submit"
                    className="btn btn-primary-dark w-100"
                    onClick={handleLogin}
                  >
                    Submit
                  </button>
                </Link>
              </div>
              <div className="mb-3 text-center">
                <Link to="/forgetpassword" className="fs-5 fw-semibold">
                  Forget Password
                </Link>
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label"
                  for="exampleCheck1"
                  style={{ fontSize: "12px" }}
                >
                  By clicking continue, you agree to our Terms of Service and
                  Privacy Policy
                </label>
              </div>
              <div className="mb-3">
                <Link to="/signup">
                  <button type="button " className="btn btn-secondary w-100 ">
                    Register ?
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <Footer/> */}

      
    </>
  );
};

export default Login;
