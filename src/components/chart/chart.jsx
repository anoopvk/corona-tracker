import React, { Component } from "react";
// import chart from "chart.js";
import { Line } from "react-chartjs-2";
class Chart extends Component {
  state = {};
  // const mychart=new chart
  render() {
    return (
      <Line
        height={50}
        width={100}
        data={{
          labels: this.props.date(),
          datasets: [
            {
              label: this.props.label,
              backgroundColor: this.props.backgroundColor,
              borderColor: this.props.borderColor,
              borderWidth: 1,
              data: this.props.dataarray(),
            },
          ],
        }}
        options={{
          tooltips: {
            mode: "x",
            axis: "x",
            intersect: false,
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

export default Chart;
