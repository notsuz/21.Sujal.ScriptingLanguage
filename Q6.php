<!-- Create a function that takes the age in years and returns the age in days -->

<?php 
$age = 20;
$days = yearsTodays($age);
echo "age in years is: $age" . "<br>";
echo "$age years in days are $days";

function yearsTodays($age){
    return $age * 365;
}

?>