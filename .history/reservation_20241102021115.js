document.getElementById('check-availability').addEventListener('click', function() {
    const date = document.getElementById('date').value;
    const timeSlot = document.getElementById('time-slot').value;
    const roomList = document.getElementById('room-list');
    const availableRooms = document.getElementById('available-rooms');

    // 清空先前的房間清單
    roomList.innerHTML = '';

    // 檢查是否已選擇日期和時段
    if (!date || !timeSlot) {
        alert('請選擇日期和時段');
        return;
    }

    // 假設的可借教室資料 (隨機選擇一些教室)
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

    // 顯示可借教室區域
    availableRooms.style.display = 'block';
});
