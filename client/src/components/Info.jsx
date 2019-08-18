import React, { Component } from "react";
import Journey from "./Journey";
import Services from "./Services";
import About from "./About";
import "./info.css";

class Info extends Component {
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
      <div className="info">
        {/* <div class="col-sm-2" /> */}
        <div className="col-sm-10">
          <div className="serviceCard">
            <h1>OUR SERVICES</h1>

            <p>
              Rebound Fitness encourages you to do a balanced program that
              includes both aerobic and strength training exercises. These
              promote heart health and weight loss, help prevent osteoporosis
              and improve muscle strength, balance and flexibility. We here at
              RBF ensure you to feel like home and make your busy life a bit
              easier and cozy for you by sharing some health and happiness.
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
          </div>
        </div>
        {this.state.button == "services" && <Services />}

        {/* ==============================================================================================*/}

        <div className="col-sm-10">
          <div className="journeyCard">
            <h1>JOURNEY</h1>

            <p>
              It's taken us a long time to understand the meaning of the quote
              by Ralph Waldo Emerson 'Life is a journey, not a destination'. We
              are not meant to rush through life. It's about savouring every
              moment of each day. It's about how we learn the lessons along the
              way. It's about learning what self-care is all about.
            </p>
            <button
              type="button"
              className="btn btn-dark btn-lg"
              name="journey"
              onClick={this.handleClick}
            >
              Know More
            </button>
          </div>
        </div>
        {this.state.button == "journey" && <Journey />}

        {/* ==============================================================================================*/}

        <div className="col-sm-10">
          <div className="aboutCard">
            <h1>ABOUT</h1>

            <p>
              At RBF we believe in SHARING HAPPINESS. The joy of giving
              certainly has a lot to give back! Peace, happiness, smile - these
              are some of the instant returns of giving. Giving means helping in
              a way, which ultimately makes us recall the simplest meaning of
              humanity “Whoever saves one life, saves the world entire - Thomas
              Keneally.
            </p>
            <button
              type="button"
              className="btn btn-dark btn-lg"
              name="about"
              onClick={this.handleClick}
            >
              Know More
            </button>
          </div>
        </div>
        {this.state.button == "about" && <About />}

        {/* ==============================================================================================*/}
        {/* ==============================================================================================*/}

        {/* <div className="cardDeck">
          <div class="card-deck">
            <div class="card text-white bg-info mb-3">
              
              <div class="card-body">
                <h2 class="card-title">Our Services</h2>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <button
                type="button"
                class="btn btn-secondary"
                name="services"
                onClick={this.handleClick}
              >
                Know More
              </button>
              
            </div>
            <div class="card text-white bg-success mb-3">
              
              <div class="card-body">
                <h2 class="card-title">Our Journey</h2>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <button
                type="button"
                class="btn btn-secondary"
                name="journey"
                onClick={this.handleClick}
              >
                Know More
              </button>
              
            </div>
            <div class="card text-white bg-warning mb-3">
              
              <div class="card-body">
                <h2 class="card-title">About</h2>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <button
                type="button"
                class="btn btn-secondary"
                name="about"
                onClick={this.handleClick}
              >
                Know More
              </button>
             
            </div>
          </div>
        </div> */}
        {/* {this.state.button == "services" && <Services />}
        {this.state.button == "journey" && <Journey />}
        {this.state.button == "about" && <About />} */}
      </div>
    );
  }
}

export default Info;
