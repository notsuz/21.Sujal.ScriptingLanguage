<?php
function createNewString($input) {
    $last = substr($input, -1);

    return $last.$input.$last;
}
echo "<h2> Sample Output</h2>";
echo createNewString("Red") . "<br>"; 
echo createNewString("Green") . "<br>";     
echo createNewString("1") . "<br>";       
?>
