<?php

$num = 25;

echo "Integer = $num". "<br>";
if (is_divisible_by_5($num)) {
    echo "$num is divisible by 5.\n";
} else {
    echo "$num is not divisible by 5.\n";
}

function is_divisible_by_5($number) {
    return $number % 5 === 0;
}

?>