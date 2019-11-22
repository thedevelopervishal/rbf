import React, { Component } from "react";
import Card from "./Card";
import Header from "./Header";
import BackButton from "./BackButton";
import "./FitHerd.css";
const API_END = require("../constant");
// const jumbotron_style = {
//   "text-align": "center"
// };
class FitHerd extends Component {
  constructor(props) {
    super(props);
    var token = localStorage.getItem("mytoken");
    this.state = {
      result: "",
      cards: [],
      token:token,
      lengthCount: 0
    };
    
    
    fetch(API_END+"/api/profiles/all", {
      crossDomain: true,
      method: "GET",
      headers: { Authorization: token }
    })
      .then(res => {
        return res.json();
      })
      .then(responseJson => {
        console.log(responseJson);
        var cards = [];
        this.pushIntoCards(cards, responseJson, responseJson.length);
        this.setState({
          result: responseJson,
          cards: cards,
          lengthCount: responseJson.length
        });
      });
  }
  pushIntoCards = (cards, responseJson, count) => {
    for (var i = 0; i < count; i++) {
      cards.push(
        <Card
          history={this.props.history}
          userid={responseJson[i].user}
          profile_username={responseJson[i].username}
          category={responseJson[i].idealPlate.category}
          
        />
      );
    }
  };
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="c">
            <BackButton
              history={this.props.history}
            />
            <span className="heading1">THE FIT HERD</span>
            <div className="sub-heading1">
              <p>Fitness is a Journey not a Destination !</p>
            </div>
          </div>
        </div>
        <div className="cards_group_container">
          <div className="cards_group">{this.state.cards}</div>
        </div>
      </div>
    );
  }
}

export default FitHerd;
//E9ECEF Jumbotron initial color
//00B2F6 button blue
