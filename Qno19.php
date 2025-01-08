<?php
function createNewString($input) {
if (substr($input,0,2)=="if"){
    return $input;
}else{
    return "if" . $input;
}
}

echo "<h2> Sample Output</h2>";

echo "<h2> Create String</h2>";
    echo createNewString("if else")."<br>";
    echo createNewString("else")."<br>";
    echo createNewString("if")."<br>";

?>
