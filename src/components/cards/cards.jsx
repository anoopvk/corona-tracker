import React, { Component } from "react";
import Card from "./card";
class Cards extends Component {
  componentDidUpdate() {
    // console.log("from cards", this.props.data);
  }
  render() {
    return (
      <div className="row text-center">
        <div className="col-md-3">
          <Card type="Infected" data={this.props.totalconfirmed} />
        </div>
        <div className="col-md-3">
          <Card type="Active" data={this.props.totalactive} />
        </div>
        <div className="col-md-3">
          <Card type="Recovered" data={this.props.totalrecovered} />
        </div>
        <div className="col-md-3">
          <Card type="Deaths" data={this.props.totaldeaths} />
        </div>
      </div>
    );
  }
}

export default Cards;
