<?php
$minutes = 5;
$seconds = minutesToSeconds($minutes);
echo "Input time= $minutes minutes". "<br>"; 
echo "$minutes minutes is equal to $seconds seconds.";

function minutesToSeconds($minutes) {
    return $minutes * 60;
}

?>