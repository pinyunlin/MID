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
document.addEventListener("DOMContentLoaded", () => {
    // 預設資料
    const roomUsageData = [
        { room: '教室101', usage_count: 15 },
        { room: '教室102', usage_count: 20 },
        { room: '教室103', usage_count: 12 },
        { room: '教室104', usage_count: 18 },
        { room: '教室105', usage_count: 10 }
    ];

    const roomUsagePercentageData = [
        { room: '教室101', usage_percentage: 20 },
        { room: '教室102', usage_percentage: 25 },
        { room: '教室103', usage_percentage: 15 },
        { room: '教室104', usage_percentage: 22 },
        { room: '教室105', usage_percentage: 18 }
    ];

    const dailyUsageData = [
        { date: '2023-11-01', daily_usage: 5 },
        { date: '2023-11-02', daily_usage: 7 },
        { date: '2023-11-03', daily_usage: 8 },
        { date: '2023-11-04', daily_usage: 4 },
        { date: '2023-11-05', daily_usage: 9 },
        { date: '2023-11-06', daily_usage: 6 },
        { date: '2023-11-07', daily_usage: 10 }
    ];

    // 長條圖：每個教室使用次數
    const barChartLabels = roomUsageData.map(item => item.room);
    const barChartData = roomUsageData.map(item => item.usage_count);

    new Chart(document.getElementById('barChart'), {
        type: 'bar',
        data: {
            labels: barChartLabels,
            datasets: [{
                label: '使用次數',
                data: barChartData,
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

    // 圓餅圖：教室使用率
    const pieChartLabels = roomUsagePercentageData.map(item => item.room);
    const pieChartData = roomUsagePercentageData.map(item => item.usage_percentage);

    new Chart(document.getElementById('pieChart'), {
        type: 'pie',
        data: {
            labels: pieChartLabels,
            datasets: [{
                label: '使用率 (%)',
                data: pieChartData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ]
            }]
        },
        options: {
            responsive: true
        }
    });

    // 折線圖：教室每日使用總數
    const lineChartLabels = dailyUsageData.map(item => item.date);
    const lineChartData = dailyUsageData.map(item => item.daily_usage);

    new Chart(document.getElementById('lineChart'), {
        type: 'line',
        data: {
            labels: lineChartLabels,
            datasets: [{
                label: '每日使用總數',
                data: lineChartData,
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

