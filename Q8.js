function compareIntegers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please provide valid integers.");
        return;
    }

    if (num1 > num2) {
        console.log(`Larger number: ${num1}`);
        console.log(`Smaller number: ${num2}`);
    } else if (num2 > num1) {
        console.log(`Larger number: ${num2}`);
        console.log(`Smaller number: ${num1}`);
    } else {
        console.log(`Both numbers are equal: ${num1}`);
    }
}

// Example usage
compareIntegers(10, 5);
