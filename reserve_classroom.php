<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $classroom = $_POST["classroom"];
    $date = $_POST["date"];
    $time = $_POST["time"];

    // 這裡可以連接資料庫並插入資料
    // 例如:
    // $conn = new mysqli("localhost", "username", "password", "database");
    // $sql = "INSERT INTO reservations (classroom, date, time) VALUES ('$classroom', '$date', '$time')";
    // $conn->query($sql);

    echo "教室預約成功！<br>";
    echo "教室編號: " . htmlspecialchars($classroom) . "<br>";
    echo "日期: " . htmlspecialchars($date) . "<br>";
    echo "時間: " . htmlspecialchars($time);
}
?>
