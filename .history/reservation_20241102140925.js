function checkAvailability() {
    const date = document.getElementById('date').value;
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    const roomList = document.getElementById('room-list');
    const availableRooms = document.getElementById('available-rooms');

    // 檢查是否已選擇日期和時間段
    if (!date || !startTime || !endTime) {
        availableRooms.classList.add('hidden');
        return;
    }

    // 清空先前的房間清單
    roomList.innerHTML = '';

    // 模擬可借教室資料
    const rooms = ['A101', 'B202', 'C303', 'D404', 'E505', 'F606', 'G707', 'H808', 'I909', 'J1010'];
    rooms.forEach(room => {
        const listItem = document.createElement('li');
        listItem.textContent = ` ${room}`;

        const reserveButton = document.createElement('button');

        listItem.addEventListener('click', function() {
            alert(` ${room} 預約成功！請準時歸還。`);
            // 跳轉到預約紀錄頁面
            window.location.href = 'reservation_record.html';
        });

        listItem.appendChild(reserveButton);
        roomList.appendChild(listItem);
    });

    // 顯示可借教室區域
    availableRooms.classList.remove('hidden');
}

// 監聽日期和時間欄位的變更
document.getElementById('date').addEventListener('change', checkAvailability);
document.getElementById('start-time').addEventListener('change', checkAvailability);
document.getElementById('end-time').addEventListener('change', checkAvailability);
