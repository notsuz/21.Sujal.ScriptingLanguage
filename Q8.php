<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $chickens = (int)$_POST['chickens'];
  $cows = (int)$_POST['cows'];
  $pigs = (int)$_POST['pigs'];

  $total_legs = ($chickens * 2) + ($cows * 4) + ($pigs * 4);

  echo "<h2>Total Legs</h2>";
  echo "<p>Chickens: $chickens (", $chickens * 2, " legs)</p>";
  echo "<p>Cows: $cows (", $cows * 4, " legs)</p>";
  echo "<p>Pigs: $pigs (", $pigs * 4, " legs)</p>";
  echo "<p><b>Total Legs: $total_legs</b></p>";
// } else {
//   echo "Invalid request.";
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animal Leg Counter</title>
</head>
<body>
    <h1>Animal Leg Counter</h1>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
        <label for="chickens">Chickens (2 legs each):</label>
        <input type="number" name="chickens" id="chickens" ><br><br>
        <label for="cows">Cows (4 legs each):</label>
        <input type="number" name="cows" id="cows" ><br><br>
        <label for="pigs">Pigs (4 legs each):</label>
        <input type="number" name="pigs" id="pigs" ><br><br>
        <button type="submit">Count Legs</button>
    </form>
</body>
</html>