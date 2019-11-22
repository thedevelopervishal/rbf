import "./BackButton.css";
import React, { Component } from "react";
class BackButton extends Component {
  state = {};
  pushToDashboard = () => {
    this.props.history.push("/dashboard");
  };
  render() {
    return <div className="back_button" onClick={this.pushToDashboard} />;
  }
}

export default BackButton;
