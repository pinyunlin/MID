document.addEventListener("DOMContentLoaded", () => {
    const users = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        name: `使用者 ${i + 1}`,
        userType: i % 2 === 0 ? "學生" : "老師",
        role: i % 3 === 0 ? "管理者" : "使用者",
    }));

    function displayUsers(page) {
        const rowsPerPage = 10;
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const pageData = users.slice(start, end);

        const tbody = document.querySelector("#userTable tbody");
        tbody.innerHTML = "";
        pageData.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.userType}</td>
                <td>${user.role}</td>
                <td><button onclick="viewReservations(${user.id})">查看</button></td>
                <td>
                    <button onclick="deleteUser(${user.id})">刪除</button>
                    <button onclick="editRole(${user.id})">更改角色</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    function setupPagination() {
        const pagination = document.getElementById("userPagination");
        const totalPages = Math.ceil(users.length / 10);
        pagination.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement("button");
            button.textContent = i;
            button.className = i === 1 ? "active" : "";
            button.addEventListener("click", () => {
                displayUsers(i);
                document.querySelector(".pagination button.active").classList.remove("active");
                button.classList.add("active");
            });
            pagination.appendChild(button);
        }
    }

    displayUsers(1);
    setupPagination();
});

function openAddUserForm() {
    alert("新增使用者功能尚未實現"); // 用於提示
}

function searchUser() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const rows = document.querySelectorAll("#userTable tbody tr");
    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        const match = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(input));
        row.style.display = match ? "" : "none";
    });
}

function deleteUser(id) {
    alert(`刪除使用者 ${id} 的功能尚未實現`);
}

function editRole(id) {
    const newRole = prompt("輸入新角色（user 或 admin）：");
    if (newRole) {
        alert(`更新使用者 ${id} 的角色為 ${newRole}`);
    }
}

function viewReservations(id) {
    alert(`查看使用者 ${id} 的借用狀況`);
}
