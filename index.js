const ctx = document.querySelector("#myChart").getContext("2d");

const labels = [
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
];

//grdient fill
let grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "rgba(58, 123, 213, 1)");
grd.addColorStop(1, "rgba(0,210,255,1)");

const data = {
  labels,
  datasets: [
    {
      data: [211, 326, 165, 350, 420, 370, 500, 375, 415],
      label: "Minecrafty Sales",
      fill: true,
      backgroundColor: grd,
      borderColor: "#000",
      pointBackgroundColor: "#000",
    },
  ],
};

let delayed;
const config = {
  type: "bar",
  data: data,
  options: {
    responsive: true,
    radius: 5,
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return `$${value}m`;
          },
        },
      },
    },
  },
};

const myCahrt = new Chart(ctx, config);
