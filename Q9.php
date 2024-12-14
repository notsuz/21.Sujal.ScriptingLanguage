<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $wins = $_POST["wins"];
        $draws = $_POST["draws"];
        $losses = $_POST["losses"];

        $totalPoints = ($wins * 3) + $draws;

        echo "Number of wins: $wins". "<br>";
        echo "Number of draws: $draws". "<br>";
        echo "Number of losses: $losses". "<br>";
        echo "<h2>Total Points: $totalPoints</h2>";
    }
    ?>

<!DOCTYPE html>
<html>
<head>
    <title>Football Points Calculator</title>
</head>
<body>
    <h2>Football Points Calculator</h2>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
        <label for="wins">Number of Wins:</label>
        <input type="number" name="wins" id="wins" required><br><br>
        <label for="draws">Number of Draws:</label>
        <input type="number" name="draws" id="draws" required><br><br>
        <label for="losses">Number of Losses:</label>
        <input type="number" name="losses" id="losses" required><br><br>
        <input type="submit" value="Calculate Points">
    </form>
</body>
</html>