<?php


$string = "Hello, world!";
echo "String:". $string ."<br>";
echo "The length of the string is: " . recursiveStringLength($string);

function recursiveStringLength($str) {
    if ($str === "") {
        return 0;
    }
    return 1 + recursiveStringLength(substr($str, 1));
}
?>
