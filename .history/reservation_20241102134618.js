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

    // 假設的可借教室資料
    const rooms = ['A101', 'B202', 'C303', 'D404', 'E505'];
    rooms.forEach(room => {
        const listItem = document.createElement('li');
        listItem.textContent = `教室 ${room}`;

        const reserveButton = document.createElement('button');
        reserveButton.textContent = '預約';
        reserveButton.addEventListener('click', function() {
            alert(`教室 ${room} 預約成功！請準時歸還。`);
        });

        listItem.appendChild(reserveButton);
        roomList.appendChild(listItem);
    });
用示可借教室區域
    availableRooms.classList.remove('hidden');
}

// 監聽日期和時間欄位的變更
document.getElementById('date').addEventListener('change', checkAvailability);
document.getElementById('start-time').addEventListener('change', checkAvailability);
document.getElementById('end-time').addEventListener('change', checkAvailability);
