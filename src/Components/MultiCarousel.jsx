import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MultiCarousel.css";
import {Link  } from "react-router-dom";

const MultiCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Carousel responsive={responsive}>
      {/* <a href="/artist" target="_blank" rel="noopener noreferrer"> */}

      


      <Link to="/makeup">
      <div
        className="card"
        //  style={{ width: "400px", height: "250px" }}
      >
      
        <img
          className="product-image"
          src="images/makeup.jpg"
          alt="dance"
          srcSet=""
        />
       
        <div className="card-layer"></div>
        <div className="card-text">Makeup</div>
        {/* <h2>dancing</h2> */}
        {/* <p className="price">$20.99</p> */}
        {/* <p>some description about product</p> */}
        {/* <p>
          <button>add to cart</button>
        </p> */}
      </div>
      {/* </a> */}
      </Link>
      <Link to="/hairstyle"  rel="noopener noreferrer">
      <div
        className="card"
        //  style={{ width: "400px", height: "250px" }}
      >
        <img
          className="product-image"
          src="images/hair-style.jpg"
          alt="dance"
          srcSet=""
        />
        <div className="card-layer"></div>
        <div className="card-text">Hairstyle</div>
        {/* <h2>dancing</h2> */}
        {/* <p className="price">$20.99</p> */}
        {/* <p>some description about product</p> */}
        {/* <p>
          <button>add to cart</button>
        </p> */}
      </div>
      </Link>
      <Link to="/nailart"  rel="noopener noreferrer">

      <div
        className="card"
        //  style={{ width: "400px", height: "250px" }}
      >
        <img
          className="product-image"
          src="images/nail-art.jpg"
          alt="dance"
          srcSet=""
        />
        <div className="card-layer"></div>
        <div className="card-text">Nail-Art</div>
        {/* <h2>dancing</h2> */}
        {/* <p className="price">$20.99</p> */}
        {/* <p>some description about product</p> */}
        {/* <p>
          <button>add to cart</button>
        </p> */}
      </div>
      </Link>

      


<Link to="/henna"  rel="noopener noreferrer">
      <div
        className="card"
        //  style={{ width: "400px", height: "250px" }}
      >
        <img
          className="product-image"
          src="images/henna.jpeg"
          alt="dance"
          srcSet=""
        />
        <div className="card-layer"></div>
        <div className="card-text">Henna</div>
        {/* <h2>dancing</h2> */}
        {/* <p className="price">$20.99</p> */}
        {/* <p>some description about product</p> */}
        {/* <p>
          <button>add to cart</button>
        </p> */}
      </div>

</Link>


<Link to="/fashion"  rel="noopener noreferrer">
      <div
        className="card"
        //  style={{ width: "400px", height: "250px" }}
      >
        <img
          className="product-image"
          src="images/fashion.jpg"
          alt="dance"
          srcSet=""
        />
        <div className="card-layer"></div>
        <div className="card-text">Fashion Designer</div>
        {/* <h2>dancing</h2> */}
        {/* <p className="price">$20.99</p> */}
        {/* <p>some description about product</p> */}
        {/* <p>
          <button>add to cart</button>
        </p> */}
      </div>
      </Link>
      <Link to="/dance"  rel="noopener noreferrer">
      <div
        className="card"
        //  style={{ width: "400px", height: "250px" }}
      >
        <img
          className="product-image"
          src="images/dance.png"
          alt="dance"
          srcSet=""
        />
        <div className="card-layer"></div>
        <div className="card-text">Dancer</div>
        {/* <h2>dancing</h2> */}
        {/* <p className="price">$20.99</p> */}
        {/* <p>some description about product</p> */}
        {/* <p>
          <button>add to cart</button>
        </p> */}
      </div>

      </Link>

      <Link to="/music"  rel="noopener noreferrer">
      <div
        className="card"
        //  style={{ width: "400px", height: "250px" }}
      >
        <img
          className="product-image"
          src="/images/music.jpg"
          alt="dance"
          srcSet=""
        />
        <div className="card-layer"></div>
        <div className="card-text">Musician</div>
        {/* <h2>dancing</h2> */}
        {/* <p className="price">$20.99</p> */}
        {/* <p>some description about product</p> */}
        {/* <p>
          <button>add to cart</button>
        </p> */}
      </div>
      </Link>

      <Link to="/paint"  rel="noopener noreferrer">
      <div
        className="card"
        //  style={{ width: "400px", height: "250px" }}
      >
        <img
          className="product-image"
          src="images/painting.jpg"
          alt="dance"
          srcSet=""
        />
        <div className="card-layer"></div>
        <div className="card-text">Painting</div>
        {/* <h2>dancing</h2> */}
        {/* <p className="price">$20.99</p> */}
        {/* <p>some description about product</p> */}
        {/* <p>
          <button>add to cart</button>
        </p> */}
      </div>
      </Link>

      <Link to="/writer"  rel="noopener noreferrer">
      <div
        className="card"
        //  style={{ width: "400px", height: "250px" }}
      >
        <img
          className="product-image"
          src="images/writing.jpg"
          alt="dance"
          srcSet=""
        />
        <div className="card-layer"></div>
        <div className="card-text">Writer</div>
        {/* <h2>dancing</h2> */}
        {/* <p className="price">$20.99</p> */}
        {/* <p>some description about product</p> */}
        {/* <p>
          <button>add to cart</button>
        </p> */}
      </div>
      </Link>

      <Link to="/teacher"  rel="noopener noreferrer">
      <div
        className="card"
        //  style={{ width: "400px", height: "250px" }}
      >
        <img
          className="product-image"
          src="images/teaching.jpg"
          alt="dance"
          srcSet=""
        />
        <div className="card-layer"></div>
        <div className="card-text">Special Teachers</div>
        {/* <h2>dancing</h2> */}
        {/* <p className="price">$20.99</p> */}
        {/* <p>some description about product</p> */}
        {/* <p>
          <button>add to cart</button>
        </p> */}
      </div>
      </Link>
    </Carousel>
  );
};

export default MultiCarousel;
