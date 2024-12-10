<?php
// 連接資料庫
$conn = new mysqli("localhost", "username", "password", "database");

if ($conn->connect_error) {
    die("資料庫連接失敗：" . $conn->connect_error);
}

// 從表單獲取帳號資料
$account = $_POST['account'];
$role = $_POST['role'];

// 插入新帳號資料
$sql = "INSERT INTO accounts (account, role) VALUES ('$account', '$role')";
if ($conn->query($sql) === TRUE) {
    echo "帳號新增成功";
} else {
    echo "新增失敗：" . $conn->error;
}

$conn->close();
?>
