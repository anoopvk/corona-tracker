import React, { Component } from "react";
import Countup from "react-countup"

class Card extends Component {
  render() {
    return (
      <div className={this.getborderclass()}>
        <p className="text-secondary">{this.props.type} </p>
        <h1><Countup start={0} end={this.props.data} duration={3} delay={0.5}  useEasing= {true} separator=","/></h1>
      </div>
    );
  }
  getborderclass=()=>{
    let classnames=""
    if(this.props.type==="Infected"){
       classnames= " borderbottominfected";
    }
    if(this.props.type==="Active"){
       classnames= " borderbottomactive";
    }
    if(this.props.type==="Recovered"){
       classnames= " borderbottomrecovered";
    }
    if(this.props.type==="Deaths"){
       classnames= " borderbottomdeaths";
    }
    return "card countcard shadow my-2"+ classnames;
  }
}

export default Card;
