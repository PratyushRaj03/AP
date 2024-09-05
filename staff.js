
const ctx2 = document.getElementById('pieChart2').getContext('2d');
    const pieChart2 = new Chart(ctx2, {
      type: 'doughnut', // For the ring-style pie chart
      data: {
        labels: ['Present', 'Paid Leave', 'Absent'],
        datasets: [{
          label: 'Task Assignments',
          data: [45, 4, 9],
          backgroundColor: ['#7f3cff', '#f86a3d', '#ffffff'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
        }
      }
    });
