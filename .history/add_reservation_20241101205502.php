<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>新增教室預約</title>
</head>
<body>
    <h1>新增教室預約</h1>
    <form action="save_reservation.php" method="post">
        <label for="classroom">教室編號:</label>
        <input type="text" id="classroom" name="classroom" required><br><br>
        
        <label for="date">預約日期:</label>
        <input type="date" id="date" name="date" required><br><br>
        
        <label for="time">預約時間:</label>
        <input type="text" id="time" name="time" required><br><br>
        
        <label for="status">狀態:</label>
        <select id="status" name="status" required>
            <option value="已確認">已確認</option>
            <option value="待確認">待確認</option>
        </select><br><br>
        
        <input type="submit" value="提交">
    </form>
</body>
</html>
