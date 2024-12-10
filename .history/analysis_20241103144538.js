document.addEventListener("DOMContentLoaded", () => {
    // 長條圖：每個教室使用次數
    fetch('get_room_usage.php')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.room);
            const usageCounts = data.map(item => item.usage_count);

            new Chart(document.getElementById('barChart'), {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: '使用次數',
                        data: usageCounts,
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: { beginAtZero: true }
                    }
                }
            });
        });

    // 圓餅圖：教室使用率
    fetch('get_room_usage_percentage.php')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.room);
            const usagePercentages = data.map(item => item.usage_percentage);

            new Chart(document.getElementById('pieChart'), {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [{
                        label: '使用率 (%)',
                        data: usagePercentages,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)'
                        ]
                    }]
                },
                options: {
                    responsive: true
                }
            });
        });

    // 折線圖：教室每日使用總數
    fetch('get_daily_usage.php')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.date);
            const dailyUsages = data.map(item => item.daily_usage);

            new Chart(document.getElementById('lineChart'), {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: '每日使用總數',
                        data: dailyUsages,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderWidth: 2,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: { beginAtZero: true }
                    }
                }
            });
        });
});
