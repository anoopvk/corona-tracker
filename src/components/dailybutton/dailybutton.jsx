import React, { Component } from "react";
class Dailybutton extends Component {
  state = {};
  render() {
    return (
      <div id="graphs" className="">
        <ul className="nav nav-tabs nav-fill">
          <li className="nav-item">
            <span
              className={this.getcumilativeclass()}
              onClick={() => this.props.onbuttonoff()}
               
            >
              <b>Cumilative</b>
            </span>
          </li>
          <li className="nav-item">
            <span
              className={this.getdailyclass()}
              onClick={() => this.props.onbuttonon()}
                
            >
      <b>Daily</b>
            </span>
          </li>
        </ul>
      </div>
    );
  }

  getcumilativeclass = () => {
    let classdaily = "";
    if (this.props.daily === "off") {
      classdaily = "active";
    }
    return "nav-link " + classdaily;
  };
  getdailyclass = () => {
    let classdaily = "";
    if (this.props.daily === "on") {
      classdaily = "active";
    }
    return "nav-link " + classdaily;
  };
}

export default Dailybutton;
