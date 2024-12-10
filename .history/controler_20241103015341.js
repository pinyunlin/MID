document.addEventListener("DOMContentLoaded", () => {
    // 模擬後端返回的使用者資料和教室預約資料
    const users = [
        { account: "user1", role: "使用者" },
        { account: "admin1", role: "管理者" },
        { account: "user2", role: "使用者" },
        { account: "user3", role: "使用者" },
        { account: "user4", role: "使用者" },
        { account: "user5", role: "使用者" },
    ];

    const reservations = [
        { account: "user1", room: "教室101", date: "2024-11-01", time: "08:00 - 10:00", purpose: "小組討論" },
        { account: "admin1", room: "教室202", date: "2024-11-02", time: "12:00 - 14:00", purpose: "會議" },
        { account: "user2", room: "教室303", date: "2024-11-03", time: "09:00 - 11:00", purpose: "考試" },
        { account: "user3", room: "教室404", date: "2024-11-05", time: "14:00 - 16:00", purpose: "演講" },
        { account: "user4", room: "教室505", date: "2024-11-06", time: "10:00 - 12:00", purpose: "專題報告" },
    ];

    // 插入使用者資料到表格並實現分頁
    paginateData(users, "userTable", "userPagination", deleteUser);

    // 插入教室預約資料到表格並實現分頁
    paginateData(reservations, "reservationTable", "reservationPagination");

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

        function setupPagination() {
            pagination.innerHTML = "";
            const totalPages = Math.ceil(data.length / rowsPerPage);

            for (let i = 1; i <= totalPages; i++) {
                const button = document.createElement("button");
                button.textContent = i;
                button.className = i === currentPage ? "active" : "";
                button.addEventListener("click", () => {
                    currentPage = i;
                    displayPage(currentPage);
                    setupPagination();
                });};}
                
