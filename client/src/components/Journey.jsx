import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import j1 from "../img/J1.jpg";
import j2 from "../img/J2.jpg";
import j3 from "../img/J3.jpg";
import j4 from "../img/J4.jpg";
import j5 from "../img/J5.jpg";
import j6 from "../img/J6.jpg";
import j7 from "../img/J7.jpg";
class Journey extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return (
      
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={1000}
        centerMode={false}
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            paritialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            paritialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            paritialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div>
          <img
            className="itemImage"
            src={j1}
          />
        </div>
        <div>
          <img
            className="itemImage"
            src={j2}
          />
        </div>
        <div>
          <img
            className="itemImage"
            src={j3}
          />
        </div>
        <div>
          <img
            className="itemImage"
            src={j4}
          />
        </div>
        <div>
          <img
            className="itemImage"
            src={j5}
          />
        </div>
        <div>
          <img
            className="itemImage"
            src={j6}
          />
        </div>
        <div>
          <img
            className="itemImage"
            src={j7}
          />
        </div>
      </Carousel>
    );
  }
}

export default Journey;
