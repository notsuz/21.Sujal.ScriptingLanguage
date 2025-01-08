<?php
function createNewString($input) {
$first = substr($input,0,3);
return $first . $input . $first;

}
echo "<h2> Sample Output</h2>";
    echo createNewString("Python")."<br>";
    echo createNewString("JS")."<br>";
    echo createNewString("Code")."<br>";

?>
