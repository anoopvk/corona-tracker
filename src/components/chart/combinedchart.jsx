import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Combinedchart extends Component {
  state = {};
  render() {
    return (
      <Line
        height={50}
        width={100}
        data={{
          labels: this.props.date(),
          datasets: this.props.dataset(),
        }}
        options={{
          tooltips: {
            mode: "index",
            // axis: "x",
            intersect: false,
            position:"nearest"
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            },
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  display: true,
                  autoSkip: true,
                  maxTicksLimit: 6,
                  minRotation: 0,
                  maxRotation: 0,
                },

                gridLines: {
                  display: true,
                  drawBorder: false,
                },
              },
            ],
            yAxes: [
              {
                ticks: { display: true, precision: 0 },
                gridLines: {
                  display: true,
                  drawBorder: false,
                },
              },
            ],
          },
        }}
      />
    );
  }
}

export default Combinedchart;
