<!-- Declaring variables with different data types -->

<?php
$integer_var = 12;
$float_var = 3.14;
$string_var = "Hello world!";
$boolean_var = false;
$array_var = [10, 20, 30, "apple", "banana"];

echo "Integer: " . $integer_var . "<br>";
print "Float: " . $float_var . "<br>";
echo "String: " . $string_var . "<br>";
print "Boolean: " . $boolean_var . "<br>";

echo "Array using print_r: <br>";
print_r($array_var);
echo "<br>";

echo "Array using var_dump: <br>";
var_dump($array_var);
echo "<br>";

echo "Data type of integer_var: " . gettype($integer_var) . "<br>";
echo "Data type of float_var: " . gettype($float_var) . "<br>";
echo "Data type of string_var: " . gettype($string_var) . "<br>";
echo "Data type of boolean_var: " . gettype($boolean_var) . "<br>";
echo "Data type of array_var: " . gettype($array_var) . "<br>";
?>