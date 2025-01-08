<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the number of people from the form input
    $n = $_POST['people'];

    // Calculate the number of cars needed
    $cars_needed = ceil($n / 5);

    // Output the result
    echo "Number of cars needed: " . $cars_needed;
}
?>

<!-- HTML Form for user input -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Car Calculation</title>
</head>
<body>
    <h2>Car Calculation</h2>
    <form method="POST">
        <label for="people">Enter the number of people:</label>
        <input type="number" id="people" name="people" required>
        <input type="submit" value="Calculate">
    </form>
</body>
</html>
