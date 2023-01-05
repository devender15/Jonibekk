import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {

  const navigate = useNavigate();

  const fruits = [
    {
      name: "Strawberry",
      quantity: 15,
      Color: "red",
    },
    {
      name: "Peach",
      quantity: 10,
      Color: "orange",
    },
    {
      name: "Banana",
      quantity: 25,
      Color: "yellow",
    },
    {
      name: "Pear",
      quantity: 10,
      Color: "yellowgreen",
    },
    {
      name: "Grape",
      quantity: 20,
      Color: "green",
    },
  ];

  const data = {
    labels: [],
    datasets: [
      {
        label: "quantity of fruits",
        data: [],
        backgroundColor: [],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  for (let i = 0; i < fruits.length; i++) {
    data.labels.push(fruits[i].name);
    data.datasets[0].data.push(fruits[i].quantity);
    data.datasets[0].backgroundColor.push(fruits[i].Color);
  }

  return (
    <div className="px-4 py-3 w-full h-[60vh]">
      <h1 className="text-xl text-center">LAB #1</h1>
      <Bar data={data} height="300px" width="600px" options={{ maintainAspectRatio: false }} className="mt-10"/>

      <button
        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
};

export default BarChart;
