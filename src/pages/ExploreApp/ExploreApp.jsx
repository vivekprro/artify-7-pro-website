import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ExploreApp = () => {
  const location = useLocation();
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <h1>Hello {location.state.id}</h1>
              <img
                src="./images/work-images/dancing.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreApp;
