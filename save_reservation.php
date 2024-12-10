<?php
// 假設使用資料庫連線
// $conn = new mysqli('localhost', 'username', 'password', 'database');

$classroom = $_POST['classroom'];
$date = $_POST['date'];
$time = $_POST['time'];
$status = $_POST['status'];

// 插入預約資料到資料庫 (替換為真正的資料庫操作語法)
// $sql = "INSERT INTO reservations (classroom, date, time, status) VALUES ('$classroom', '$date', '$time', '$status')";
// $conn->query($sql);

// 回到主頁面
header('Location: index.html');
?>
