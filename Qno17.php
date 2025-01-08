<?php
function computeSum($a, $b) {
    if ($a == $b) {
        return 3 * ($a + $b);
    } else {
        return $a + $b;
    }
}
$a = 10;
$b = 7;  
echo "<h2> Compute Sum</H2>";
echo"a=$a<br>";
echo"b=$b<br>";
$result = computeSum($a, $b);
echo "The result is: " . $result;
?>
