import React, { Component } from "react";
import pLogo from "../img/RBF.jpg";
class PostCard extends Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              <img
                className="rounded-circle d-none d-md-block"
                src={pLogo}
                alt=""
              />
            </a>
            <br />
            <p className="text-center">{this.props.username}</p>
          </div>
          <div className="col-md-12">
            <p className="lead">{this.props.post}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default PostCard;
