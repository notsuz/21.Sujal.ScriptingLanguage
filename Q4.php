<?php

$num1 = 10;
$num2 = 20;
$result = sum($num1, $num2);
echo "Number 1= $num1 ". "<br>";
echo "Number 2= $num2 ". "<br>"  ;
echo "The sum of $num1 and $num2 is: $result";

function sum($num1, $num2) {
    return $num1 + $num2;
}
?>

