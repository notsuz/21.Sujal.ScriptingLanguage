<!-- . Create a function that takes voltage and current and returns the calculated power -->

<?php
$voltage = 220;
$current = 4;
$result = power($voltage, $current);
echo "voltage = $voltage". "<br>";
echo "current = $current". "<br>";

echo "The calculated power is: $result watts";

function power($voltage, $current){

    return $voltage * $current;

}

?>