import React, { Component } from "react";
import RBF from "../img/RBF.jpg";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div class="col">
                <div class="row">
                  <img
                    className="aboutImg"
                    src={RBF}
                  />
                </div>
                <div class="row">
                  <p style={{ color: "black" }}>
                    A strong organization is built on the pillars of strong team members and we understand the fact totally.
                    Our team is packed with INTERNATIONALLY CERTIFIED DIETICIANS, PROFESSIONALLY TRAINED ATHLETES, TRAINERS and FITNESS EXPERTS.
                    Above all our every gym member is an integral part of our REBOUND FITNESS family. We will be really pleased to have you with us.
                    Come join us. E-mail us at :- reboundfitness@gmail.com or Call @8817340444
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 ">
              <div class="col">
                <div class="row" style={{ color: "black" }}>
                  <h1 id="about">About Us</h1>
                  <p className="aboutText">
                    Wanna join us? Please be in touch with the REBOUND FAMILY on Instagram
                    @reboundfitness
                  </p>
                </div>
                <div class="row">
                  <img
                    className="aboutImg"
                    src="https://cdn.shopify.com/s/files/1/0849/8154/files/about-motto-1.jpg?15451586511908439013"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
