// 模擬後端連接來獲取學期時間段
document.addEventListener("DOMContentLoaded", () => {
    // 模擬獲取學期時間段的資料
    const semesterTime = "2023-09-01 至 2024-01-15"; // 這裡可以通過 AJAX 從後端獲取動態數據
    document.getElementById("semester-time").textContent = semesterTime;
});

