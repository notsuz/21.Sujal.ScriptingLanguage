<?php
function largestamongthree($num1 , $num2 , $num3) {
if($num1>$num2 && $num1>$num3){
    return $num1;
}
elseif($num2>$num1 && $num2>$num3){
    return $num2;
}
else
{ 
    return $num3;
}

}

$num1=543323;
$num2=12324343;
$num3=9999999;
echo "<h2> Largest Number</h2>";
echo"Num1=$num1<br>";
echo"Num2=$num2<br>";
echo"Num3=$num3<br>";
    echo"The largest number among all three number is:". largestamongthree($num1, $num2, $num3);
?>
