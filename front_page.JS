function goToPage() {
    // 將頁面設定為淡出
    document.body.classList.add('fade-out');

    // 設置延遲，等待淡出效果結束後再跳轉頁面
    setTimeout(() => {
        window.location.href = "login.html"; // 指定登入頁面 URL
    }, 500); // 500ms 是淡出動畫時間
}

// 當頁面加載完成時，確保淡入效果
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});