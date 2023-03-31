const ctx = document.querySelector("#myChart");

Chart.defaults.font.size = 16;
Chart.defaults.font.family = "san-serif";
Chart.defaults.elements.point.radius = 1;
Chart.defaults.elements.line.tension = 0.45;

const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan 10", "Jan 11", "Jan 12", "Jan 13", "Jan 14"],
    datasets: [
      {
        label: "Dataset 1",
        data: [250, 60, 40, 500, 700],
        borderColor: "#36A2EB",
        backgroundColor: "#9BD0F5",
      },
      {
        label: "Dataset 2",
        data: [0, 30, 260, 100, 900],
        borderColor: "#A7ABFF",
        backgroundColor: "#FFB1C1",
      },
    ],
  },
  options: {
    animation: true,
    layout: {
      padding: 0,
    },
    scales: {
      y: {
        // beginAtZero: true,
        min: 0,
        max: 1050,
        data: {
          labels: [0, 250, 550, 1050],
        },
        grid: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          min: 0,
          max: 1050,
          stepSize: 290,
          callback: function (value) {
            return "$" + value;
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  },
});
