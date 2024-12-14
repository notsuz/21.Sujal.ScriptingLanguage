<?php

$str1 = "Sujal";
$str2 = "world";

echo "String 1: $str1". "<br>";
echo "String 2: $str2". "<br>";

if (equalString($str1, $str2)) {
  echo "True";
} else {
  echo "False";
}

function equalString($str1, $str2) {
  return strlen($str1) == strlen($str2);
}
?>