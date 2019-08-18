import React, { Component } from "react";
import yoga from "../img/YOGA.jpg";
import zumba from "../img/ZUMBA.jpg";
import wt from "../img/WT.JPG";
import cardio from "../img/CD.JPG";
import dance from "../img/ZB.jpg";
import spa from "../img/SPA.jpg";
class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="services">
        <div className="servicesCard">
          <div class="card-deck">
            <div class="card">
              <img class="card-img-top" src={yoga} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">AEROBICS - YOGA</h5>
                <p class="card-text">
                  Cardiovascular exercise can also help lower blood pressure,
                  and keep your arteries clear by raising “good” high-density
                  lipoprotein (HDL) cholesterol and lowering “bad” low-density
                  lipoprotein (LDL) cholesterol levels in the blood.
                </p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src={zumba} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">ZUMBA</h5>
                <p class="card-text">
                  It's fun. The more you enjoy your exercise routine, the more
                  likely you are to stick with itGreat for weight loss. Zumba is
                  a powerful exercise with a 600 to 1,000-calorie burn in just
                  an hour. And here at RBF its really fun.
                </p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src={cardio} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">CARDIO</h5>
                <p class="card-text">
                  Cardio helps increase the strength of your heart and lungs.
                  Cardio can help you improve your endurance during workouts as
                  well. However the main reason people do cardio is to burn
                  calories to help them lose weight.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-deck">
          <div class="card">
            <img class="card-img-top" src={wt} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">WEIGHT TRAINING</h5>
              <p class="card-text">
                You will be able to work harder and longer with the proper
                weight training activities. It improves bone density. One of the
                best ways you can control bone loss as you age is to add
                strength training into your workout plan. It promotes fat-free
                body mass with decreasing sarcopenia.
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={dance} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">DANCE CLASSES</h5>
              <p class="card-text">
                Dancing is a whole-body workout that's actually fun. It's good
                for your heart, it makes you stronger, and it can help with
                balance and coordination. A 30-minute dance class burns between
                130 and 250 calories, about the same as jogging. Sign up for a
                class.
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={spa} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">SPA and STEAM BATH</h5>
              <p class="card-text">
                Sitting in a steam room might significantly improve your
                cardiovascular health. A study of older individuals showed that
                moist heat improved circulation, especially in extremities.
                Improved circulation can lead to lowered blood pressure and a
                healthier heart. It can also promote healing of broken skin
                tissue.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
