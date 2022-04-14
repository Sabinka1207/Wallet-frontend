import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import '../../css/main.min.css';


ChartJS.register(ArcElement, Tooltip, Legend);
Legend.defaults.display = false;
function Chart({chartData}) {  
  console.log(chartData);
  const labels = chartData.categories.map(category=> category.category)
  const categoryData = chartData.categories.map(category=> category.categorySum)
  const data = {
    labels: labels,
    datasets: [
      {
        data: categoryData,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      },
    ],
  };

  return (
    <div className="chart">
      <Doughnut data={data} />
    </div>
  );
}

export default Chart;
