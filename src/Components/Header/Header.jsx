import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";

function Header() {
  const [bgColor, setbgcolor] = useState(false);
  const [logoColor, setlogocolor] = useState(false);
  const [iconColor, seticonColor] = useState(false);
  return (
    <>


<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  {/* <div class="container"> */}
    <Link to="/" className="navbar-brand">
      <img src="./images/logo.png" alt="Artify7pro-logo" width="" height="" style={{width:"60px", height:"35px"}}/>
    </Link>
  {/* </div> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        
        
        <li class="nav-item dropdown ">
          {/* <Link to="" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Login
          </Link>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul> */}
          <Link class="btn btn-primary-dark dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Login
  </Link>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Login as Artist</a></li>
    <li><a class="dropdown-item" href="#">Another as User</a></li>
  </ul>
        </li>
        <li class="nav-item ms-2">
          <Link class="nav-link btn  btn-primary-dark btn-border" href="#">SignUp</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
{/* ********************************************* */}

{/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}
    
{/* ************************************ */}
      {/* <nav
        className="navbar  navbar-expand-lg py-0  position-absolute top-0 start-0 z-1 w-100 
        "


        data-bs-theme="dark"
        style={{ background: bgColor ? "white" : "rgba(255,255,255,1)" }}
      
        
      >
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand logo" href="#">
            <img
              src="images/logo.png"
              alt=""
              srcSet=""
              style={{
                width: "110px",
                height: "80px",
                padding: "0px 0px",
                marginTop: "10px",
              }}
            />
            
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: iconColor ? "black" : "white" }}
            // style={{ color: "white" }}
            onClick={() => {
              setbgcolor(!bgColor);
              setlogocolor(!logoColor);
              seticonColor(!iconColor);
              console.log("chala", bgColor, logoColor, iconColor);
            }}
          >
             <span
              className="navbar-toggler-icon"
              // style={{ color: "white" }}
              style={{ display: iconColor ? "block" : "none" }}
            ></span> 
            <GiHamburgerMenu />
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"></a>
              </li>
              <li className="nav-item"></li>
            </ul>

            <Link to="/login">
              <button
                type="button"
                className="btn btn-primary-dark  me-4 rounded-pill px-4 py-2 btn-main-light fw-bolder "
                style={{ display: iconColor ? "none" : "block" }}
              >
                {" "}
                Login{" "}
              </button>{" "}
            </Link>

            <Link to="/signup">
              <button
                type="button"
                className="btn btn-primary-dark rounded-pill  me-4 px-4 py-2 fw-bolder  "
                style={{ display: iconColor ? "none" : "block" }}
              >
                Sign Up
              </button>
            </Link>
            
            <Link to="/login">
              <button
                type="button"
                className="btn btn-primary-dark  mb-4 rounded-pill px-4 py-2 btn-main-light fw-bolder text-light "
                style={{ display: iconColor ? "block" : "none" }}
              >
                {" "}
                Login{" "}
              </button>{" "}
            </Link>

            <Link to="/Signup">
              <button
                type="button"
                className="btn btn-primary-dark rounded-pill  mb-2 px-4 py-2 fw-bolder  "
                style={{ display: iconColor ? "block" : "none" }}
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav> */}

      
    </>
  );
}

export default Header;
