import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";
import img1 from "../img/rbf1.jpeg";
import img2 from "../img/rbf2.jpeg";
import img3 from "../img/rbf3.jpeg";
import img4 from "../img/rbf4.jpeg";
import img5 from "../img/rbf5.jpeg";


const styles = { height: 400, width: "100%" };

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
  render() {
    return (
      
      <div>
        <div id="demo" class="carousel slide" data-ride="carousel">
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active" />
            <li data-target="#demo" data-slide-to="1" />
            <li data-target="#demo" data-slide-to="2" />
            <li data-target="#demo" data-slide-to="3" />
            <li data-target="#demo" data-slide-to="4" />
          </ul>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img className="slide" src={img1} />
            </div>
            <div class="carousel-item">
              <img className="slide" src={img2} />
            </div>
            <div class="carousel-item">
              <img className="slide" src={img3} />
            </div>
            <div class="carousel-item">
              <img className="slide" src={img4} />
            </div>
            <div class="carousel-item">
              <img className="slide" src={img5} />
            </div>
          </div>
          <a
            style={{ width: 100 }}
            class="carousel-control-prev"
            href="#demo"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" />
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon" />
          </a>
        </div>
      </div>
    );
  }
}
export default Demo;
