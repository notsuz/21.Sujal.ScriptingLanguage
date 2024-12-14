<?php 
$base = 21;
$height = 55;
$result = area($base, $height);
echo "Base of triangle= $base". "<br>";
echo "height of triangle= $height". "<br>";
echo "Area of the triangle of base $base & height $height is: $result";

function area($base, $height){
    return 0.5 * ($base * $height);
}
?>