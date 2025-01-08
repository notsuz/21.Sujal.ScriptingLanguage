<?php
function calculateDifference($n) {
    $difference = abs($n - 51);
    if ($n > 51) {
        return 3 * $difference;
    }
    return $difference;
}
echo"<h2>Calculate difference</h2>";
$n = 60;
echo "The result for n = $n is: " . calculateDifference($n) . "<br>";
$n = 45;
echo "The result for n = $n is: " . calculateDifference($n);
?>
