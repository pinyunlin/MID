<?php
include 'database.php';

$user_id = $_GET['user_id'];
$sql = "SELECT room, date, time, purpose FROM reservations WHERE user_id = $user_id";
$result = mysqli_query($conn, $sql);
$reservations = [];

while ($row = mysqli_fetch_assoc($result)) {
    $reservations[] = $row;
}

echo json_encode($reservations);
mysqli_close($conn);


?>
