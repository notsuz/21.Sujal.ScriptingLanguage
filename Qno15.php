<?php
$array = ["apple", "banana", "cherry", "date"];
$index = 2;

echo "Value at index $index: " . getValueAtIndex($array, $index) . "<br>"; 
$invalidIndex = 5;
echo "Value at index $invalidIndex: " . getValueAtIndex($array, $invalidIndex) . "<br>"; 

function getValueAtIndex($array, $index) {
    if (!is_array($array)) {
        return "First argument must be an array.";
    }
    if (!is_int($index)) {
        return "Second argument must be an integer.";
    }

    if (array_key_exists($index, $array)) {
        return $array[$index];
    } else {
        return "Index does not exist in the array.";
    }
}


?>
