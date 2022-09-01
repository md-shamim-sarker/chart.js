
const ctx = document.getElementById('myChart').getContext('2d');
const chartObject = {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Learn Chart JS',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
            borderColor: ['black'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        title: 'Something'
    }
};

const myChart = new Chart(ctx, chartObject);

/* 

*/