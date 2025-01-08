<?php
function createNewString($input) {
    
    if (strlen($input) < 2) {
        return $input;
    }


    $front = substr($input, 0, 2);

    return str_repeat($front, 4);
}


echo createNewString("C Sharp") . "<br>"; 
echo createNewString("JS") . "<br>";      
echo createNewString("a") . "<br>";      
?>
