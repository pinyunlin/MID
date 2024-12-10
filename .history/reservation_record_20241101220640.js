const reservations = [
  { classroom:'A101', date: '2024-10-25', time: '10:00 - 12:00', status: '進行中', id: 1 },
  { classroom: 'A202', date: '2024-10-28', time: '14:00 - 16:00', status: '已完成', id: 2 },
  { classroom: 'A203', date: '2024-11-02', time: '09:00 - 11:00', status: '未開始', id: 3 }
];

// 顯示頁面並排序
function displayPage() {
  const table = document.getElementById('reservationTable');
  table.innerHTML = '';

  // 排序：日期從晚到早
  reservations.sort((a, b) => new Date(b.date) - new Date(a.date));

  reservations.forEach((reservation) => {
      const row = document.createElement('tr');
      let statusClass = '';
      let deleteClass = '';

      // 狀態樣式設定
      if (reservation.status === '已完成') {
          statusClass = 'status-completed';
          deleteClass = 'hidden';
      } else if (reservation.status === '進行中') {
          statusClass = 'status-in-progress';
          deleteClass = 'hidden';
      } else {
          statusClass = 'status-not-started';
      }

      row.innerHTML = `
          <td>${reservation.classroom}</td>
          <td>${reservation.date}</td>
          <td>${reservation.time}</td>
          <td><span class="status-button ${statusClass}">${reservation.status}</span></td>
          <td>
              <span class="delete-btn ${deleteClass}" onclick="deleteReservation(${reservation.id})">取消</span>
          </td>
      `;
      table.appendChild(row);
  });

  document.getElementById('pageInfo').textContent = ` 1 / 1`; // 根據實際分頁更新
}

// 刪除預約資料並重新顯示
function deleteReservation(id) {
  const index = reservations.findIndex(r => r.id === id);
  if (index > -1 && confirm("確認刪除此預約紀錄？")) {
      reservations.splice(index, 1); // 刪除資料
      displayPage(); // 更新顯示
  }
}

window.onload = displayPage;
