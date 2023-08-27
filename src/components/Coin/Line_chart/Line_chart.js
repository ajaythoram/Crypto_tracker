import React from "react";
import { Line } from "react-chartjs-2";
import {Chart as chartjs} from "chart.js/auto";

function LineChart({chartData,multiAxis}){
    const options = {
        Plugins:{
            legend:{
                display : multiAxis ? true:false,
            },
        },
        responsive : true,
        interactions:{
            mode:"index",
            intersect:false,
        },
        scales: {
            coin1: {
              position: "left",
            },
            coin2: multiAxis && {
              position: "right",
            },
          },
        
    };
    return <Line data={chartData} options={options} />
}
export default LineChart;