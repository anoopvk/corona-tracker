import React, { Component } from "react";
// import Test from './components/test';
import Cards from "./components/cards/cards";
import { getdatafromapi } from "./components/fetchdata";
import Statepicker from "./components/statepicker/statepicker";
import Chart from "./components/chart/chart";
import Dailybutton from "./components/dailybutton/dailybutton";
import Combinedchart from "./components/chart/combinedchart";
import Activebutton from "./components/dailybutton/activebutton"

class App extends Component {
  state = {
    states_daily: [],
    state_selection: "tt",
    daily: "off",
  };
  async componentDidMount() {
    const fetcheddata = await getdatafromapi();
    this.setState({ states_daily: fetcheddata.data.states_daily });
  }

  render() {
    if (!this.state.states_daily[0]) {
      return <h1>loading</h1>;
    }
    return (
      <div className="container text-center containerwidth mb-5">
        <div className="m-5">
          <h1 className="display-3 my-5">Covid-19 Tracker India</h1>
          <Statepicker onstateselect={this.handlestateselect} />
        </div>
        <Cards
          totalconfirmed={this.calctotalconfirmed(this.state.state_selection)}
          totalrecovered={this.calctotalrecovered(this.state.state_selection)}
          totaldeaths={this.calctotaldeaths(this.state.state_selection)}
          totalactive={this.calctotalactive(this.state.state_selection)}
        />
        {/* <Dailybutton daily={this.state.daily} onbuttonon={this.dailybuttonon} onbuttonoff={this.dailybuttonoff} /> */}
        <div className="row ">
          <div className="col-md-6">
            <div className="row mt-5">
              <div className="col-12">
                <Activebutton/>
              </div>
            </div>
            <div className="card shadow">
              <Chart
                label="Active Cases"
                backgroundColor="rgba(0, 0, 132, 0.2)"
                borderColor="rgba(0, 0, 132, 1)"
                date={this.getdatearray}
                dataarray={this.getactivearray}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="row mt-5">
              <div className="col-12">
                <Dailybutton
                  daily={this.state.daily}
                  onbuttonon={this.dailybuttonon}
                  onbuttonoff={this.dailybuttonoff}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card shadow">
                  <Combinedchart
                    date={this.getdatearray}
                    dataset={this.getcombineddataset}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  calctotalconfirmed = (s) => {
    const states_daily = this.state.states_daily;
    let totalcount = 0;
    for (let index = 0; index < states_daily.length; index++) {
      if (states_daily[index].status === "Confirmed") {
        totalcount += parseInt(states_daily[index][s]);
      }
    }
    return totalcount;
  };

  calctotalrecovered = (s) => {
    const states_daily = this.state.states_daily;
    let totalcount = 0;
    for (let index = 0; index < states_daily.length; index++) {
      if (states_daily[index].status === "Recovered") {
        totalcount += parseInt(states_daily[index][s]);
      }
    }
    return totalcount;
  };
  calctotaldeaths = (s) => {
    const states_daily = this.state.states_daily;
    let totalcount = 0;
    for (let index = 0; index < states_daily.length; index++) {
      if (states_daily[index].status === "Deceased") {
        totalcount += parseInt(states_daily[index][s]);
      }
    }
    return totalcount;
  };

  calctotalactive = (s) => {
    let totalcount =
      this.calctotalconfirmed(s) -
      this.calctotalrecovered(s) -
      this.calctotaldeaths(s);
    return totalcount;
  };

  handlestateselect = (value) => {
    this.setState({ state_selection: value });
  };

  getdatearray = () => {
    let date = [];
    const states_daily = this.state.states_daily;
    for (let index = 0; index < states_daily.length; index++) {
      if (!date.includes(states_daily[index]["date"].substring(0, states_daily[index]["date"].length - 3))) {
        date = [...date, states_daily[index]["date"].substring(0, states_daily[index]["date"].length - 3)];
      }
    }
    console.log(date);
    return date;
  };

  getconfirmedarray = () => {
    let array = [];
    let i = 0;
    let totalcount = 0;
    const states_daily = this.state.states_daily;
    for (let index = 0; index < states_daily.length; index++) {
      if (states_daily[index].status === "Confirmed") {
        if (this.state.daily === "off") {
          totalcount += parseInt(
            states_daily[index][this.state.state_selection]
          );
          array[i] = totalcount;
          i++;
        } else {
          array[i] = parseInt(states_daily[index][this.state.state_selection]);
          i++;
        }
      }
    }
    console.log(array);
    return array;
  };

  gettotalconfirmedarray = () => {
    let array = [];
    let i = 0;
    let totalcount = 0;
    const states_daily = this.state.states_daily;
    for (let index = 0; index < states_daily.length; index++) {
      if (states_daily[index].status === "Confirmed") {
        totalcount += parseInt(states_daily[index][this.state.state_selection]);
        array[i] = totalcount;
        i++;
      }
    }
    return array;
  };

  getrecoveredarray = () => {
    let array = [];
    let i = 0;
    let totalcount = 0;
    const states_daily = this.state.states_daily;
    for (let index = 0; index < states_daily.length; index++) {
      if (states_daily[index].status === "Recovered") {
        if (this.state.daily === "off") {
          totalcount += parseInt(
            states_daily[index][this.state.state_selection]
          );
          array[i] = totalcount;
          i++;
        } else {
          array[i] = parseInt(states_daily[index][this.state.state_selection]);
          i++;
        }
      }
    }
    console.log(array);
    return array;
  };

  gettotalrecoveredarray = () => {
    let array = [];
    let i = 0;
    let totalcount = 0;
    const states_daily = this.state.states_daily;
    for (let index = 0; index < states_daily.length; index++) {
      if (states_daily[index].status === "Recovered") {
        totalcount += parseInt(states_daily[index][this.state.state_selection]);
        array[i] = totalcount;
        i++;
      }
    }
    console.log(array);
    return array;
  };

  getdeatharray = () => {
    let array = [];
    let i = 0;
    let totalcount = 0;
    const states_daily = this.state.states_daily;
    for (let index = 0; index < states_daily.length; index++) {
      if (states_daily[index].status === "Deceased") {
        if (this.state.daily === "off") {
          totalcount += parseInt(
            states_daily[index][this.state.state_selection]
          );
          array[i] = totalcount;
          i++;
        } else {
          array[i] = parseInt(states_daily[index][this.state.state_selection]);
          i++;
        }
      }
    }
    console.log(array);
    return array;
  };

  gettotaldeatharray = () => {
    let array = [];
    let i = 0;
    let totalcount = 0;
    const states_daily = this.state.states_daily;
    for (let index = 0; index < states_daily.length; index++) {
      if (states_daily[index].status === "Deceased") {
        totalcount += parseInt(states_daily[index][this.state.state_selection]);
        array[i] = totalcount;
        i++;
      }
    }
    console.log(array);
    return array;
  };
  getactivearray = () => {
    let confirmed = this.gettotalconfirmedarray();
    let recovered = this.gettotalrecoveredarray();
    let deaths = this.gettotaldeatharray();
    let active = [];

    for (let index = 0; index < confirmed.length; index++) {
      active[index] = confirmed[index] - recovered[index] - deaths[index];
    }
    console.log(active);
    return active;
  };

  getconfirmeddataset = () => {
    let dataset = {
      label: "Confirmed Cases",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
      data: this.getconfirmedarray(),
    };
    return dataset;
  };
  getrecovereddataset = () => {
    let dataset = {
      label: "Recovered Cases",
      backgroundColor: "rgba(0, 99, 0, 0.2)",
      borderColor: "rgba(0, 99, 0, 1)",
      borderWidth: 1,
      data: this.getrecoveredarray(),
    };
    return dataset;
  };

  getdeathdataset = () => {
    let dataset = {
      label: "Death Cases",
      backgroundColor: "rgba(99, 99, 99, 0.2)",
      borderColor: "rgba(99, 99, 99, 1)",
      borderWidth: 1,
      data: this.getdeatharray(),
    };
    return dataset;
  };
  getcombineddataset = () => {
    let dataset = [
      this.getconfirmeddataset(),
      this.getrecovereddataset(),
      this.getdeathdataset(),
    ];
    return dataset;
  };

  dailybuttonon = () => {
    this.setState({ daily: "on" });
  };
  dailybuttonoff = () => {
    this.setState({ daily: "off" });
  };
}

export default App;
