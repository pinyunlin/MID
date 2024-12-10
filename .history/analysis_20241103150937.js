document.addEventListener("DOMContentLoaded", () => {
    // 假設的教室使用次數資料
    const roomUsageData = [
        { room: 'LM200', usage_count: 25 },
        { room: 'LM202', usage_count: 18 },
        { room: 'SL201', usage_count: 30 },
        { room: 'SL245', usage_count: 15 },
        { room: 'SL246', usage_count: 20 },
        { room: 'SL471', usage_count: 12 },
        { room: 'SL200-1', usage_count: 10 },
        { room: 'SL200-3', usage_count: 8 }
    ];

    const roomUsagePercentageData = [
        { room: 'LM200', usage_percentage: 20 },
        { room: 'LM202', usage_percentage: 15 },
        { room: 'SL201', usage_percentage: 24 },
        { room: 'SL245', usage_percentage: 12 },
        { room: 'SL246', usage_percentage: 16 },
        { room: 'SL471', usage_percentage: 9 },
        { room: 'SL200-1', usage_percentage: 7 },
        { room: 'SL200-3', usage_percentage: 5 }
    ];

    const monthlyUsageData = [
        { month: '2023-01', monthly_usage: 12 },
        { month: '2023-02', monthly_usage: 15 },
        { month: '2023-03', monthly_usage: 18 },
        { month: '2023-04', monthly_usage: 10 },
        { month: '2023-05', monthly_usage: 25 },
        { month: '2023-06', monthly_usage: 20 },
        { month: '2023-07', monthly_usage: 22 },
        { month: '2023-08', monthly_usage: 16 },
        { month: '2023-09', monthly_usage: 30 },
        { month: '2023-10', monthly_usage: 28 },
        { month: '2023-11', monthly_usage: 32 },
        { month: '2023-12', monthly_usage: 29 }
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
            maintainAspectRatio: false,
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
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(200, 200, 200, 0.6)',
                    'rgba(100, 100, 100, 0.6)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // 折線圖：每月教室使用總數
    const lineChartLabels = monthlyUsageData.map(item => item.month);
    const lineChartData = monthlyUsageData.map(item => item.monthly_usage);

    new Chart(document.getElementById('lineChart'), {
        type: 'line',
        data: {
            labels: lineChartLabels,
            datasets: [{
                label: '每月使用總數',
                data: lineChartData,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
});
// 分頁函數
    function paginateData(data, tableId, paginationId, deleteCallback) {
        const rowsPerPage = 3;
        let currentPage = 1;
        const table = document.getElementById(tableId);
        const pagination = document.getElementById(paginationId);

        function displayPage(page) {
            table.querySelector("tbody").innerHTML = "";
            const start = (page - 1) * rowsPerPage;
            const end = start + rowsPerPage;
            const pageData = data.slice(start, end);
            pageData.forEach((item) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${item.account}</td>
                    <td>${item.role || item.room}</td>
                    <td>${item.date || ''}</td>
                    <td>${item.time || ''}</td>
                    <td>${item.purpose || ''}</td>
                    ${deleteCallback ? `<td><button onclick="deleteUser('${item.account}')">刪除</button></td>` : ''}
                `;
                table.querySelector("tbody").appendChild(row);
            });
        }