import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Registering the components needed for the chart
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarChart = ({ totals }) => {
  // Data for the bar chart
  const data = {
    labels: ['Total Debit', 'Total Credit', 'Total Net'],
    datasets: [
      {
        label: 'Amount',
        data: [totals.debit, totals.credit, totals.net],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Total Debit, Credit, and Net',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
