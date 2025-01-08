<?php
function touppercase($inputString){
    $length = strlen($inputString);
    if ($length<3){
        return strtoupper($inputString);
    }
    $start = substr($inputString,0,$length-3);
    $end = strtoupper(substr($inputString,-3));
    return $start . $end;
}
echo "<h2> Sample Output</h2>";
    echo touppercase("Nepal")."<br>";
    echo touppercase("Npl")."<br>";
    echo touppercase("Bca")."<br>";
    echo touppercase("Bachelor")."<br>";

?>