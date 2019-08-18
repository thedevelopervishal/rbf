import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import Info from "./Info";
import img2 from "../img/rbf2.jpeg";
import img3 from "../img/rbf3.jpeg";
import img4 from "../img/rbf4.jpeg";

class Landing extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <div className="landing2">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={img2} alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="display-3 mb-4">REBOUND FITNESS</h1>
                  <p className="lead">
                    Join THE FIT HERD and become the best version of yourself
                  </p>
                  <br />
                  <Link to="/register" className="btn btn-lg btn-info mr-2">
                    Sign Up
                  </Link>
                  <Link to="/login" className="btn btn-lg btn-light">
                    Login
                  </Link>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={img3} alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="display-3 mb-4">REBOUND FITNESS</h1>
                  <p className="lead">
                    Join THE FIT HERD and become the best version of yourself
                  </p>
                  <br />
                  <Link to="/register" className="btn btn-lg btn-info mr-2">
                    Sign Up
                  </Link>
                  <Link to="/login" className="btn btn-lg btn-light">
                    Login
                  </Link>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={img4} alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="display-3 mb-4">REBOUND FITNESS</h1>
                  <p className="lead">
                    Join THE FIT HERD and become the best version of yourself
                  </p>
                  <br />
                  <Link to="/register" className="btn btn-lg btn-info mr-2">
                    Sign Up
                  </Link>
                  <Link to="/login" className="btn btn-lg btn-light">
                    Login
                  </Link>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          <Info />
        </div>
      </div>
    );
  }
}

export default Landing;
