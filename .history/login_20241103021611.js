// 頁面加載時淡入效果
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});

// 處理登入表單提交
function handleLogin(event) {
    event.preventDefault(); // 阻止表單默認提交行為

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginButton = document.getElementById('loginButton');
    const loginContainer = document.querySelector('.login-container');

    // 簡單的驗證
    if (!username || !password) {
        alert("請輸入使用者名和密碼");
        return;
    }

    // 顯示加載效果
    loginButton.disabled = true;
    loginButton.textContent = "Logging in...";
    loginContainer.classList.add('loading');

    // 模擬延遲處理，例如向伺服器發送請求
    setTimeout(() => {
        // 模擬登入成功後跳轉到主頁面
        window.location.href = "reser.html"; // 修改為您的主頁 URL
    }, 1500); // 假設 1.5 秒後跳轉
}
function goToPage() {
    // 將頁面設定為淡出
    document.body.classList.add('fade-out');

    // 設置延遲，等待淡出效果結束後再跳轉頁面
    setTimeout(() => {
        window.location.href = "major.html"; // 指定登入頁面 URL
    }, 500); // 500ms 是淡出動畫時間
}

// 當頁面加載完成時，確保淡入效果
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});
