var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx, {
    type: 'bar',
    // type: 'line',
    // type: 'pie',
    // type: 'doughnut',
    // type: 'radar',
    // type: 'polarArea',
    data: {
        labels: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind", "JSDOM"],
        datasets: [
            {
                data: [13, 15, 5, 10, 9, 10],
                label: "Programming Languages",
                backgroundColor: [
                    "violet", "blue", "skyblue", "green", "orange", "red"
                ],
                borderWidth: 2,
                borderColor: ['black']
            },
        ],
    },
    options: {
        responsive: false,
        layout: {
            padding: {
                // left: 50,
                // top: 20,
            },
        },
        tooltips: {
            enabled: false,
            backgroundColor: "red",
        },
        title: {
            display: true,
            text: 'Custom Chart Title',
        },
    },
});