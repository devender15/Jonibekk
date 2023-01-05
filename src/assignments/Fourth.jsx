import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Fourth = () => {

  const record = [
    {
      year: "2011",
      nyc_consumption_million_gallons_per_day: "1021",
      per_capita_gallons_per_person_per_day: "122",
      color: "yellow",
    },
    {
      year: "2012",
      nyc_consumption_million_gallons_per_day: "1009.14",
      per_capita_gallons_per_person_per_day: "119",
      color: "green",
    },
    {
      year: "2013",
      nyc_consumption_million_gallons_per_day: "1006.10",
      per_capita_gallons_per_person_per_day: "117",
      color: "orange",
    },
    {
      year: "2014",
      nyc_consumption_million_gallons_per_day: "996",
      per_capita_gallons_per_person_per_day: "115",
      color: "red",
    },
    {
      year: "2015",
      nyc_consumption_million_gallons_per_day: "1009",
      per_capita_gallons_per_person_per_day: "115",
      color: "blue",
    },
    {
      year: "2016",
      nyc_consumption_million_gallons_per_day: "1002",
      per_capita_gallons_per_person_per_day: "114",
      color: "purple",
    },
    {
      year: "2017",
      nyc_consumption_million_gallons_per_day: "990.2",
      per_capita_gallons_per_person_per_day: "112",
      color: "pink",
    },
    {
      year: "2018",
      nyc_consumption_million_gallons_per_day: "1008.00",
      per_capita_gallons_per_person_per_day: "114",
      color: "magenta",
    },
    {
      year: "2019",
      nyc_consumption_million_gallons_per_day: "987.4",
      per_capita_gallons_per_person_per_day: "112",
      color: "black",
    },
    {
      year: "2020",
      nyc_consumption_million_gallons_per_day: "981",
      per_capita_gallons_per_person_per_day: "111",
      color: "gray",
    },
    {
      year: "2021",
      nyc_consumption_million_gallons_per_day: "979",
      per_capita_gallons_per_person_per_day: "116",
      color: "green",
    },
  ];

  const data = {
    labels: [],
    datasets: [
      {
        label: "Consumption of water in cities of New York",
        data: [],
        backgroundColor: [],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  for (let i = 0; i < record.length; i++) {
    data.labels.push(record[i].year);
    data.datasets[0].data.push(record[i].per_capita_gallons_per_person_per_day);
    data.datasets[0].backgroundColor.push(record[i].color);
  }

  return (
    <div>
      <div>
        {/* <h1 className="text-center text-2xl">Bar Chart</h1> */}
        <Bar
          data={data}
          height="300px"
          width="600px"
          options={{
            plugins: {
              title: {
                display: true,
                text: "Jonibek Karshiev",
                color: "teal",
                font: {
                  size: 34,
                },
              },
            },
          }}
          className="mt-10"
        />
      </div>

      <div>
        <Doughnut
          data={data}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Doughnut Chart",
                color: "blue",
                font: {
                  size: 34,
                },
                padding: {
                  top: 30,
                  bottom: 30,
                },
                responsive: true,
                animation: {
                  animateScale: true,
                },
              },
            },
          }}
          className="mt-10"
        />
      </div>
    </div>
  );
};

export default Fourth;
