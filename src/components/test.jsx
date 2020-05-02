import React, { Component } from "react";
import { getdatafromapi } from "./fetchdata";

class Test extends Component {
  state = {
    states_daily: [],
  };
  async componentDidMount() {
    const fetcheddata = await getdatafromapi();
    // this.setState({ data: fetcheddata.data });
    this.setState({ states_daily: fetcheddata.data.states_daily });
    console.log(this.state.states_daily[0].date);
  }

  render() {
    return (
      <div>
        <ul>
          <li>{}</li>
        </ul>
      </div>
    );
  }
}

export default Test;
