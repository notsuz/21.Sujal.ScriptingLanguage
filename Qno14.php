<?php

$array = ["Ram", "Shyam", "Apple", "Data"];
$string1 = "Apple";
$string2 = "Data";
print_r($array);
echo "<br>". "Index of '$string1': " . StringIndex($array, $string1) . "<br>"; 
echo "Index of '$string2': " . StringIndex($array, $string2) . "<br>"; 

$stringNotFound = "orange";
echo "Index of '$stringNotFound': " . StringIndex($array, $stringNotFound) . "<br>";


function StringIndex($array, $string) {
    if (!is_array($array)) {
        return "First argument must be an array.";
    }
    if (!is_string($string)) {
        return "Second argument must be a string.";
    }
    $index = array_search($string, $array);
    if ($index === false) {
        return "String not found in the array.";
    }
    return $index;
}
?>
