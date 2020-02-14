import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/Card";
import Info from "./Info";
import img2 from "../img/rbf2.jpeg";
import img3 from "../img/rbf3.jpeg";
import img4 from "../img/rbf4.jpeg";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      button: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      button: event.target.name
    });
    console.log(event.target.name);
  }
  render() {
    return (
      <div className="main">
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
        <div className="mobile">
          <img src={img2} className="m_img"></img>
          <h1 className="m_rb">REBOUND FITNESS</h1>
          <p className="m_jo">
            Join THE FIT HERD and become the best version of yourself
          </p>
          <br />
          <Link to="/register" className="btn btn-lg btn-info mr-2 sb">
            Sign Up
          </Link>
          <Link to="/login" className="btn btn-lg btn-light">
            Login
          </Link>
          <Card className="c1">
            <CardHeader className="text-center cb11">OUR SERVICES</CardHeader>
            <CardBody className="cb1">
              <p className="p1">
                Rebound Fitness encourages you<br /> to do a balanced program that <br />
                includes both aerobic and strength<br/>training exercises.
              </p>
              <button
                type="button"
                className="btn btn-dark btn-lg"
                name="services"
                onClick={this.handleClick}
              >
                {" "}
                Know More{" "}
              </button>
            </CardBody>
          </Card>
          <Card className="c2">
            <CardHeader className="text-center cb12">JOURNEY</CardHeader>
            <CardBody className="cb1">
              It's taken us a long time to<br/> understand <br />
              the meaning of the quote by Ralph<br/> Waldo Emerson 'Life is a
              journey,<br/> not a destination'.
              <button
                type="button"
                className="btn btn-dark btn-lg"
                name="services"
                onClick={this.handleClick}
              >
                {" "}
                Know More{" "}
              </button>
            </CardBody>
          </Card>
          <Card className="c3">
            <CardHeader className="text-center cb13">ABOUT</CardHeader>
            <CardBody className="cb1">
            At RBF we believe in SHARING<br /> HAPPINESS. The joy of giving<br />
              certainly has a lot to give back!
              <button
                type="button"
                className="btn btn-dark btn-lg"
                name="services"
                onClick={this.handleClick}
              >
                {" "}
                Know More{" "}
              </button>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default Landing;
