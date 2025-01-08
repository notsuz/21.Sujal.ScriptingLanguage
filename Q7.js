function performCalculations() {
   
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please enter valid numbers.");
        return;
    }

    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num2 !== 0 ? num1 / num2 : "Division by zero is not allowed";

    console.log(`Addition: ${num1} + ${num2} = ${addition}`);
    console.log(`Subtraction: ${num1} - ${num2} = ${subtraction}`);
    console.log(`Multiplication: ${num1} * ${num2} = ${multiplication}`);
    console.log(`Division: ${num1} / ${num2} = ${division}`);
}
performCalculations();
