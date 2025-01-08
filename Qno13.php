<?php
function calculateArea($base, $height, $shape) {
    if (!is_numeric($base) || !is_numeric($height)) {
        return "Base and height must be numeric values.";
    }
    if ($base <= 0 || $height <= 0) {
        return "Base and height must be positive values.";
    }

    switch (strtolower($shape)) {
        case "triangle":
            return 0.5 * $base * $height;
        case "parallelogram":
            return $base * $height;
        default:
            return "Invalid shape. Please specify shape name.";
    }
}

echo "Area of triangle: " . calculateArea(10, 5, "triangle") . "<br>";
echo "Area of parallelogram: " . calculateArea(10, 5, "parallelogram") . "<br>";
echo "Invalid shape: " . calculateArea(10, 5, "circle") . "<br>";
?>
